# gRPC Inference Gateway

This project implements a scalable model-serving gateway built with TypeScript and gRPC, designed to solve the common bottleneck of low GPU utilization during AI inference. By intercepting incoming prediction requests and aggregating them into configurable batches before dispatch, the system maximizes hardware throughput and reduces the operational overhead of individual inference calls. This gateway serves as a production-ready middleware component for event-driven machine learning architectures.

## Technical Stack
* Language: TypeScript / Node.js
* Framework: gRPC (@grpc/grpc-js)
* Serialization: Protocol Buffers (proto-loader)
* Architecture: Event-driven batch processing

## Local Setup
Ensure you have Node.js installed on your system.

1. Clone the repository
   git clone https://github.com/nolanefe/grpc-inference-gateway.git
   cd grpc-inference-gateway

2. Install dependencies
   npm install

3. Start the server
   npx ts-node server.ts

