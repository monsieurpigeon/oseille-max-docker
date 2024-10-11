# File ./Dockerfile
FROM node:20.11.1-alpine AS base

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

# Copy source
COPY src ./src
COPY tsconfig.json ./tsconfig.json

# Build dist
RUN yarn build

# Start production image build
FROM node:20.11.1-alpine

# Copy node modules and build directory
COPY --from=base ./node_modules ./node_modules
COPY --from=base /dist /dist

# Copy static files
COPY src/assets dist/assets

# Expose port 3000
EXPOSE 4000
CMD ["dist/index.js"]