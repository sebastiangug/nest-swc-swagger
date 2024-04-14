# Partner REST API

## Authentication

```mermaid
sequenceDiagram
    participant Client
    participant Server

    Client->>Server: POST /login
    Note right of Client: { "key": "abcdef..." }
    Server-->>Client: HTTP Response


    Note left of Server: {
    Note left of Server:   "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    Note left of Server:   "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    Note left of Server: }




```

# Tech Debt:

### Tests

- unit testing for libs
- unit testing for controller services
- add graphql resolvers (code first)
- app-wide e2e test
- architecture documentation
- encryption key cycling endpoints
- TOTP for MFA upon login
- swagger descriptions, input & output
