import { Section } from "./api-data";

export const AssetDashboard: Section[] = [
  {
    id: "Assetdashboard",
    title: "Asset Dashboard",
    description: "Manage Special Purpose Vehicle operations",
    endpoints: [
        {
        id: "assets-list",
        title: "Overview",
        method: "GET",
        path: "/api/assets/real-estate/asset-overview?assetId=694bbbb56c606ce25cc84643",
        description: "Retrieve all assets with optional filtering",
        parameters: [
          {
            name: "assetId",
            type: "string",
            description: "Asset type filter (stock, bond, real_estate)",
            required: true,
          },
        ],
        request: {
          description: "Retrieve assets with filters",
          example: `GET /api/assets/real-estate/asset-overview?assetId=694bbbb56c606ce25cc84643`,
        },
        response: {
          description: "Returns array of asset objects",
          example: `{
{
    "success": true,
    "message": "Asset overview fetched successfully",
    "statusCode": 200,
    "data": {
        "_id": "694bbbb56c606ce25cc84643",
        "category": "residential",
        "currency": "GBP",
        "name": "Canary Wharf Harbour Tower",
        "about": "Canary Wharf Harbour Tower is a premium 45-storey residential and mixed-use development located directly on South Dock in Canary Wharf, London’s leading global financial district.\n The tower offers panoramic views of the River Thames, Canary Wharf skyline, and Greenwich Peninsula. Residences range from 1–3 bedroom luxury apartments featuring contemporary interiors, engineered timber flooring, Siemens kitchens, and floor-to-ceiling glazing.\n The building includes a private residents’ club, waterfront terrace, indoor pool, wellness spa, cinema room, business lounge, and 24/7 concierge.\n The asset benefits from immediate access to Jubilee Line, DLR, and Elizabeth Line stations, providing strong rental demand from finance professionals, expatriates, and multinational tenants.",
        "country": "IN",
        "state": "AS",
        "city": "Barpeta",
        "landmark": "Canary Wharf — South Dock, Adjacent to Jubilee Line Station",
        "latitude": null,
        "longitude": null,
        "totalNumberOfSfts": 10000,
        "pricePerSft": 500,
        "basePropertyValue": 5000000,
        "totalPropertyValueAfterFees": 5400000,
        "rentalInformation": {
            "rentPerSqft": 20,
            "vacancyRate": 0,
            "grossMonthlyRent": 200000,
            "netMonthlyRent": 200000,
            "grossAnnualRent": 2400000,
            "netAnnualRent": 2400000,
            "expenses": {
                "monthlyExpenses": 0,
                "annualExpenses": 0
            },
            "netCashFlow": 2400000
        },
        "tokenInformation": {
            "tokenSymbol": "BON001",
            "tokenSupply": 10000,
            "minimumTokensToBuy": 1,
            "maximumTokensToBuy": 10000,
            "availableTokensToBuy": 9998,
            "tokenPrice": 500,
            "blockchainProjectAddress": "0x344cEFB980c7eE058a05087638dFbac4e63da429",
            "blockchainEscrowAddress": "0xAB221eE95Ef3c1a7C7a09B5be27645C8AA4e92Bb",
            "blockchainOrderManagerAddress": "0xaAEafc166C2D442439596F24656314F1EE5ffdCC",
            "blockchainDaoAddress": "0x95f5C9DD7048D291806aBA24909E5a2739b800c7"
        },
        "hostedBy": {
            "name": "",
            "address": "",
            "phone": "",
            "email": "",
            "website": "",
            "logoUrl": "",
            "whatsappNumber": "",
            "totalProjects": 0,
            "ongoingProjects": 0,
            "primeLocation": "",
            "about": "",
            "yearEstablished": null,
            "isVerified": false
        },
        "annualRentalYield": 44.44444444444444,
        "company": {
            "id": "694bb8cf6c606ce25cc84438",
            "name": "HarbourView Property SPV Ltd",
            "daoConfiguration": {
                "daoName": "Harbour",
                "tokenSymbol": "HAR_DAO",
                "blockchain": "xdc",
                "governanceModel": "equal-voting",
                "proposalThresholdPercent": 20,
                "quorumPercent": 22,
                "votingPeriod": {
                    "days": 10,
                    "hours": 5
                },
                "decisionType": "all-decisions",
                "governanceRights": {
                    "votingRights": true,
                    "proposalCreation": true,
                    "adminVotePower": true
                },
                "issuerRepSignature": true
            },
            "assetManager": {
                "name": null,
                "email": null,
                "phoneNumber": null,
                "idNumber": null,
                "idProof": null
            }
        },
        "investmentStats": {
            "totalRaised": 2172.0403605889246,
            "numberOfInvestors": 3,
            "averageInvestment": 724.0134535296415
        },
        "orderStats": {
            "totalOrders": 6,
            "completedOrders": 0,
            "cancelledOrders": 0,
            "pendingOrders": 6,
            "refundedOrders": 0,
            "failedOrders": 0
        }
    }
}
    }`,
        },
      },

      {
        id: "assets-list",
        title: "Investors",
        method: "GET",
        path: "/api/user/investor/asset-investors?assetId=694bbbb56c606ce25cc84643&page=1&limit=10&search=&type=",
        description: "Retrieve all assets with optional filtering",
        parameters: [
          {
            name: "page",
            type: "number",
            description: "Asset type filter (stock, bond, real_estate)",
            required: true,
          },
          {
            name: "limit",
            type: "number",
            description: "Asset status filter (active, inactive)",
            required: false,
          },
        ],
        request: {
          description: "Retrieve assets with filters",
          example: `GET /api/user/investor/asset-investors?assetId=694bbbb56c606ce25cc84643&page=1&limit=10&search=&type=`,
        },
        response: {
          description: "Returns array of asset objects",
          example: `{
{
    "data": [
        {
            "_id": "6926dc4da2c5e4046f46c636",
            "tokensBooked": 4,
            "totalOrderValue": 2160,
            "currency": "GBP",
            "ownershipPercentage": 0.04,
            "status": "pending",
            "investor": {
                "_id": "6926dc4da2c5e4046f46c636",
                "firstName": "Rajesh",
                "lastName": "Ande",
                "email": "rajesh@ryzer.app",
                "type": "individual"
            }
        },
        {
            "_id": "6932b2196516954363c94807",
            "tokensBooked": 1,
            "totalOrderValue": 6.00075529287604,
            "currency": "GBP",
            "ownershipPercentage": 0.01,
            "status": "pending",
            "investor": {
                "_id": "6932b2196516954363c94807",
                "firstName": "Mohamad",
                "lastName": "Anas",
                "email": "anas@ryzer.app",
                "type": "individual"
            }
        },
        {
            "_id": "691ea565cfe4f24db1ce77ed",
            "tokensBooked": 1,
            "totalOrderValue": 6.039605296048662,
            "currency": "GBP",
            "ownershipPercentage": 0.01,
            "status": "pending",
            "investor": {
                "_id": "691ea565cfe4f24db1ce77ed",
                "firstName": "Satya",
                "lastName": "Bhaskar",
                "email": "bhaskarperuri266@gmail.com",
                "type": "individual"
            }
        }
    ],
    "pagination": {
        "currentPage": 1,
        "limit": 10,
        "totalPages": 1,
        "totalCount": 3,
        "hasNext": false,
        "hasPrevious": false
    },
    "message": "Investors retrieved successfully"
}
}`,
        },
      },

       {
        id: "assets-list",
        title: "Orders",
        method: "GET",
        path: "/api/orders/admin?assetId=694bbbb56c606ce25cc84643&page=1&limit=10&search=&currentStatus=",
        description: "Retrieve all assets with optional filtering",
        parameters: [
         {
            name: "page",
            type: "number",
            description: "Asset type filter (stock, bond, real_estate)",
            required: true,
          },
          {
            name: "limit",
            type: "number",
            description: "Asset status filter (active, inactive)",
            required: false,
          },
        ],
        request: {
          description: "Retrieve assets with filters",
          example: `GET /api/orders/admin?assetId=694bbbb56c606ce25cc84643&page=1&limit=10&search=&currentStatus=`,
        },
        response: {
          description: "Returns array of asset objects",
          example: `{
{
    "data": [
        {
            "_id": "695b548d00e3c244e937d241",
            "investor": {
                "_id": "6932b2196516954363c94807",
                "firstName": "Mohamad",
                "lastName": "Anas",
                "email": "anas@ryzer.app"
            },
            "tokensBooked": 1,
            "totalOrderValue": 6.00075529287604,
            "paymentType": "full-payment",
            "currentStatus": "awaiting-documents-to-be-signed",
            "currency": "USDT",
            "createdAt": "2026-01-05T06:05:01.753Z",
            "paidAmountfromuser": 8.076386666051198,
            "paymentMethod": "crypto"
        },
        {
            "_id": "6954c4096c606ce25cc8dde5",
            "investor": {
                "_id": "6926dc4da2c5e4046f46c636",
                "firstName": "Rajesh",
                "lastName": "Ande",
                "email": "rajesh@ryzer.app"
            },
            "tokensBooked": 1,
            "totalOrderValue": 540,
            "paymentType": "full-payment",
            "currentStatus": "order-created",
            "currency": "INR",
            "createdAt": "2025-12-31T06:34:49.311Z",
            "paidAmountfromuser": 729.0432,
            "paymentMethod": "fiat"
        },
        {
            "_id": "6954c3536c606ce25cc8dd99",
            "investor": {
                "_id": "6926dc4da2c5e4046f46c636",
                "firstName": "Rajesh",
                "lastName": "Ande",
                "email": "rajesh@ryzer.app"
            },
            "tokensBooked": 1,
            "totalOrderValue": 540,
            "paymentType": "full-payment",
            "currentStatus": "order-created",
            "currency": "INR",
            "createdAt": "2025-12-31T06:31:47.580Z",
            "paidAmountfromuser": 729.0432,
            "paymentMethod": "fiat"
        },
        {
            "_id": "6954b8876c606ce25cc8daa2",
            "investor": {
                "_id": "6926dc4da2c5e4046f46c636",
                "firstName": "Rajesh",
                "lastName": "Ande",
                "email": "rajesh@ryzer.app"
            },
            "tokensBooked": 1,
            "totalOrderValue": 540,
            "paymentType": "full-payment",
            "currentStatus": "order-created",
            "currency": "INR",
            "createdAt": "2025-12-31T05:45:43.465Z",
            "paidAmountfromuser": 729.0432,
            "paymentMethod": "fiat"
        },
        {
            "_id": "6954b63a6c606ce25cc8da64",
            "investor": {
                "_id": "6926dc4da2c5e4046f46c636",
                "firstName": "Rajesh",
                "lastName": "Ande",
                "email": "rajesh@ryzer.app"
            },
            "tokensBooked": 1,
            "totalOrderValue": 540,
            "paymentType": "full-payment",
            "currentStatus": "order-created",
            "currency": "INR",
            "createdAt": "2025-12-31T05:35:54.084Z",
            "paidAmountfromuser": 729.0432,
            "paymentMethod": "fiat"
        },
        {
            "_id": "694bc9206c606ce25cc85047",
            "investor": {
                "_id": "691ea565cfe4f24db1ce77ed",
                "firstName": "Satya",
                "lastName": "Bhaskar",
                "email": "bhaskarperuri266@gmail.com"
            },
            "tokensBooked": 1,
            "totalOrderValue": 6.039605296048662,
            "paymentType": "full-payment",
            "currentStatus": "awaiting-documents-to-be-signed",
            "currency": "USDT",
            "createdAt": "2025-12-24T11:06:08.725Z",
            "paidAmountfromuser": 8.155016602820229,
            "paymentMethod": "crypto"
        }
    ],
    "pagination": {
        "currentPage": 1,
        "limit": 10,
        "totalPages": 1,
        "totalCount": 6,
        "hasNext": false,
        "hasPrevious": false
    },
    "message": "Orders retrieved successfully"
}
}`,
        },
      },
    ],
  },
];
