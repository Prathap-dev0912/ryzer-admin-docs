export interface Endpoint {
  id: string;
  title: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  path: string;
  description: string;
  parameters?: {
    name: string;
    type: string;
    description: string;
    required: boolean;
  }[];
  request?: {
    example: string;
    description: string;
  };
  response?: {
    example: string;
    description: string;
  };
}

export interface Section {
  id: string;
  title: string;
  description: string;
  endpoints: Endpoint[];
}

export const Sections: Section[] = [
  {
    id: "authentication",
    title: "Authentication",
    description: "Manage API authentication and token generation",
    endpoints: [
      {
        id: "auth-login",
        title: "User Login",
        method: "POST",
        path: "/api/admin/auth/ryzer-authetincate",
        description: "Authenticate a user and receive an access token",
        parameters: [
          {
            name: "email",
            type: "string",
            description: "User email address",
            required: true,
          },
        ],
        request: {
          description: "Send user credentials to authenticate",
          example: `{
  "email": "user@example.com",
  "password": "secure_password"
}`,
        },
        response: {
          description: "Returns authentication token and user details",
          example: `{
 {
    "success": true,
    "message": "OTP sent successfully to prathap@ryzer.app",
    "statusCode": 200,
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OTM3YzlkZTExMDUzMTRlOGNkZTc3MzMiLCJpYXQiOjE3NzI4MjE5NzIsImV4cCI6MTc3MjgyMjI3Mn0.g0mRCe1S5QpW9fTP0wOj-ZphjCrednKmMPrzjIzlkLU"
    }
}
}`,
        },
      },
      {
        id: "auth-verify",
        title: "Verify Token",
        method: "GET",
        path: "/api/admin/auth/verify-otp",
        description: "Verify the validity of an access token",
        parameters: [
          {
            name: "token",
            type: "string",
            description: "Access token to verify",
            required: true,
          },
        ],
        request: {
          description: "Pass token in Authorization header",
          example: `GET /api/auth/verify HTTP/1.1
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...`,
        },
        response: {
          description: "Returns token validity status",
          example: `{
 {
    "success": true,
    "message": "OTP verified successfully.",
    "statusCode": 200,
    "data": {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiNjkzN2M5ZGUxMTA1MzE0ZThjZGU3NzMzIiwiaWF0IjoxNzcyODIyMDg0LCJleHAiOjE3NzI5MDg0ODR9.asp9DZC0mlqpUOO4Nfcpj8z980-cNjgNDREY_-Ykf-8",
        "sessionId": "f5603824fdc22d38f380dc3486c62611ece0894d8e2a1cf8265a97be45e1b14bfaafd94251a5a07152d1a14ba154ecf02d0fed2687957f04338d53eb0b1d533c",
        "admin": {
            "_id": "6937c9de1105314e8cde7733",
            "email": "prathap@ryzer.app",
            "createdAt": "2025-12-09T07:03:58.422Z",
            "updatedAt": "2025-12-09T07:03:58.422Z",
            "__v": 0
        }
    }
}
}`,
        },
      },
    ],
  },
  {
    id: "assets",
    title: "Assets",
    description: "Manage digital and physical assets",
    endpoints: [
      {
        id: "assets-list",
        title: "Assets List",
        method: "GET",
        path: "/api/assets/real-estate/admin-list?page=1&limit=10&search=&status=active",
        description: "Retrieve all assets with optional filtering",
        parameters: [
          {
            name: "page",
            type: "number",
            description: "Asset type filter (stock, bond, real_estate)",
            required: false,
          },
          {
            name: "status",
            type: "string",
            description: "Asset status filter (active, inactive)",
            required: false,
          },
          {
            name: "limit",
            type: "number",
            description: "Asset type filter (stock, bond, real_estate)",
            required: false,
          },
        ],
        request: {
          description: "Retrieve assets with filters",
          example: `GET /api/assets/real-estate/admin-list?page=1&limit=10&search=&status=active HTTP/1.1`,
        },
        response: {
          description: "Returns array of asset objects",
          example: `{
 {
    "data": [
        {
            "_id": "69565b76d9ab739bcfc59ca9",
            "status": "active",
            "name": "The Pearl Seaview Residences",
            "country": "QA",
            "state": "DA",
            "city": "Doha",
            "landmark": "The Pearl-Qatar — Porto Arabia Waterfront",
            "createdAt": "2026-01-01T11:33:10.653Z",
            "updatedAt": "2026-02-12T07:58:59.775Z",
            "completedSteps": [
                "asset_information",
                "token_information",
                "media_documents",
                "investment_details",
                "rent_information",
                "escrow_legal",
                "location_places",
                "tc_faq",
                "investors_signature"
            ],
            "completedStepsCount": 9,
            "totalSteps": 9,
            "totalTokens": 15000,
            "availableTokensToBuy": 14984,
            "blockchainProjectAddress": "0xCc0c96b686FEf7236101E176275b6d4bA69df680",
            "percentageOfTokensSold": 0.10666666666666667,
            "companyName": "Pearl Horizon Property SPV",
            "orderCount": 3,
            "uniqueInvestorCount": 3
        },
        {
            "_id": "694bbbb56c606ce25cc84643",
            "status": "active",
            "name": "Canary Wharf Harbour Tower",
            "country": "IN",
            "state": "AS",
            "city": "Barpeta",
            "landmark": "Canary Wharf — South Dock, Adjacent to Jubilee Line Station",
            "createdAt": "2025-12-24T10:08:53.375Z",
            "updatedAt": "2026-01-05T06:05:01.697Z",
            "completedSteps": [
                "asset_information",
                "token_information",
                "media_documents",
                "investment_details",
                "rent_information",
                "escrow_legal",
                "location_places",
                "investors_signature"
            ],
            "completedStepsCount": 8,
            "totalSteps": 9,
            "totalTokens": 10000,
            "availableTokensToBuy": 9998,
            "blockchainProjectAddress": "0x344cEFB980c7eE058a05087638dFbac4e63da429",
            "percentageOfTokensSold": 0.02,
            "companyName": "HarbourView Property SPV Ltd",
            "orderCount": 6,
            "uniqueInvestorCount": 3
        },
        {
            "_id": "694bab2160dd72d19eee5711",
            "status": "active",
            "name": "Bluewaters Crest Tower",
            "country": "AE",
            "state": "DU",
            "city": "Dubai",
            "landmark": "Bluewaters Island — Opposite Ain Dubai & JBR Beach",
            "createdAt": "2025-12-24T08:58:09.642Z",
            "updatedAt": "2026-03-05T16:40:34.290Z",
            "completedSteps": [
                "asset_information",
                "token_information",
                "media_documents",
                "investment_details",
                "rent_information",
                "escrow_legal",
                "location_places",
                "investors_signature"
            ],
            "completedStepsCount": 8,
            "totalSteps": 9,
            "totalTokens": 10000,
            "availableTokensToBuy": 9998,
            "blockchainProjectAddress": "0x678C2b11153720b3Fc3eE16A40461a9F602a2b4e",
            "percentageOfTokensSold": 0.02,
            "companyName": "Azure Marina Property SPV LLC",
            "orderCount": 3,
            "uniqueInvestorCount": 3
        },
        {
            "_id": "694a3d7360dd72d19eee3423",
            "status": "active",
            "name": "Bandra Sky Signature Tower",
            "country": "IN",
            "state": "MH",
            "city": "Mumbai",
            "landmark": "Bandra Kurla Complex (BKC) — Near U.S. Consulate & Jio World Centre",
            "createdAt": "2025-12-23T06:57:55.500Z",
            "updatedAt": "2026-01-22T14:52:11.313Z",
            "completedSteps": [
                "asset_information",
                "token_information",
                "media_documents",
                "investment_details",
                "rent_information",
                "escrow_legal",
                "location_places",
                "investors_signature"
            ],
            "completedStepsCount": 8,
            "totalSteps": 9,
            "totalTokens": 5000,
            "availableTokensToBuy": 4983,
            "blockchainProjectAddress": "0x50D9476880ED4e969eAcdb951275cD838470d84c",
            "percentageOfTokensSold": 0.33999999999999997,
            "companyName": "Nexora Assets SPV Private Limited",
            "orderCount": 12,
            "uniqueInvestorCount": 4
        },
        {
            "_id": "6943f354b9c43d93b053a564",
            "status": "active",
            "name": "Bandra Kurla Signature Tower",
            "country": "IN",
            "state": "MH",
            "city": "Mumbai",
            "landmark": "Bandra Kurla Complex, Mumbai",
            "createdAt": "2025-12-18T12:28:04.516Z",
            "updatedAt": "2026-03-04T09:38:10.296Z",
            "completedSteps": [
                "asset_information",
                "token_information",
                "media_documents",
                "investment_details",
                "rent_information",
                "escrow_legal",
                "location_places",
                "investors_signature"
            ],
            "completedStepsCount": 8,
            "totalSteps": 9,
            "totalTokens": 1000000,
            "availableTokensToBuy": 998666,
            "blockchainProjectAddress": "0x3b40212F740EF3e2901Fa5B42bA99AAf4982DCb6",
            "percentageOfTokensSold": 0.1334,
            "companyName": "UrbanCrest Realty",
            "orderCount": 35,
            "uniqueInvestorCount": 6
        },
        {
            "_id": "6943e8227f101807cde5e872",
            "status": "active",
            "name": "Burj Vista Residences",
            "country": "AE",
            "state": "DU",
            "city": "Dubai",
            "landmark": "Direct Burj Khalifa View | Sheikh Mohammed Bin Rashid Boulevard",
            "createdAt": "2025-12-18T11:40:18.433Z",
            "updatedAt": "2026-03-05T14:48:11.763Z",
            "completedSteps": [
                "asset_information",
                "token_information",
                "media_documents",
                "investment_details",
                "rent_information",
                "escrow_legal",
                "location_places",
                "investors_signature"
            ],
            "completedStepsCount": 8,
            "totalSteps": 9,
            "totalTokens": 5000,
            "availableTokensToBuy": 4806,
            "blockchainProjectAddress": "0x385e54bb48EeEDe60De2eC7027C02c58960872Ae",
            "percentageOfTokensSold": 3.88,
            "companyName": "Burj Marina Property",
            "orderCount": 59,
            "uniqueInvestorCount": 13
        }
    ],
    "pagination": {
        "page": 1,
        "limit": 10,
        "currentPage": 1,
        "hasNextPage": false,
        "hasPreviousPage": false,
        "totalCount": 6,
        "totalPages": 1
    },
    "message": "Assets fetched successfully"
}
}`,
        },
      },
    ],
  },
];
