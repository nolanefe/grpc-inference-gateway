import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

const PROTO_PATH = path.join(__dirname, 'inference.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const proto = grpc.loadPackageDefinition(packageDefinition) as any;

const server = new grpc.Server();
let requestBatch: Buffer[] = [];

server.addService(proto.inference.ModelService.service, {
    Predict: (call: any, callback: any) => {
        requestBatch.push(call.request.tensor_data);
        
        // Batch processing logic
        if (requestBatch.length >= 32) {
            console.log(`Processing batch of ${requestBatch.length} requests...`);
            // Logic for dispatching to GPU cluster goes here
            requestBatch = [];
        }
        
        callback(null, { status: "Queued for batch inference" });
    }
});

server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    console.log("Gateway running on port 50051");
    server.start();
});