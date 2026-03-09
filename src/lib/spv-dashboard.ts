import { Section } from "./api-data";

export const SpvDashboard: Section[] = [
  {
    id: "cerateSpv",
    title: "SPV Dashboard",
    description: "Manage Special Purpose Vehicle operations",
    endpoints: [
        {
        id: "assets-list",
        title: "Spv Overview",
        method: "GET",
        path: "/api/assets/rental-distribution/699ebb2ef6176fc097a630a7/assets",
        description: "Retrieve all assets with optional filtering",
        parameters: [
          {
            name: "id",
            type: "string",
            description: "Asset type filter (stock, bond, real_estate)",
            required: true,
          },
        ],
        request: {
          description: "Retrieve assets with filters",
          example: `GET /api/assets/rental-distribution/699ebb2ef6176fc097a630a7/assets`,
        },
        response: {
          description: "Returns array of asset objects",
          example: `{
{
    "status": true,
    "statusCode": 200,
    "message": "Spv retrieved successfully",
    "data": {
        "asset": {
            "rentalInformation": {
                "expenses": {
                    "monthlyExpenses": 0,
                    "annualExpenses": 0
                },
                "rentPerSft": 0,
                "vacancyRate": 0,
                "grossMonthlyRent": 0,
                "netMonthlyRent": 0,
                "grossAnnualRent": 0,
                "netAnnualRent": 0,
                "netCashFlow": 0
            },
            "tokenInformation": {
                "tokenSupply": 0
            },
            "_id": "699ec139f6176fc097a63574",
            "currency": "INR",
            "name": "My Home Bhooja Space",
            "totalNumberOfSfts": 0,
            "pricePerSft": 0
        },
        "expenses": [],
        "investors": [],
        "totalAmountInvested": [
            {
                "_id": null,
                "totalAmountInvested": 364673.9137380091
            }
        ],
        "allocations": [],
        "annualYield": null
    }
}}`,
        },
      },

      {
        id: "assets-list",
        title: "Investors",
        method: "GET",
        path: "/api/company/699ebb2ef6176fc097a630a7/inv/ad?page=1&limit=10&search=",
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
          example: `GET /api/company/699ebb2ef6176fc097a630a7/inv/ad?page=1&limit=10&search=`,
        },
        response: {
          description: "Returns array of asset objects",
          example: `{
 {
    "success": true,
    "message": "Investors retrieved successfully",
    "statusCode": 200,
    "data": {
        "summary": {
            "totalInvestors": 0,
            "totalInvestment": 0,
            "originalTotalInvestment": 0,
            "assetCurrency": "INR"
        },
        "investors": [],
        "pagination": {
            "currentPage": 1,
            "totalPages": 0,
            "totalItems": 0,
            "itemsPerPage": 10
        }
    }
}
}`,
        },
      },

       {
        id: "assets-list",
        title: "Orders",
        method: "GET",
        path: "/api/company/699ebb2ef6176fc097a630a7/od?page=1&limit=10",
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
          example: `GET /api/company/699ebb2ef6176fc097a630a7/od?page=1&limit=10`,
        },
        response: {
          description: "Returns array of asset objects",
          example: `{
 {
    "success": true,
    "message": "Orders retrieved successfully",
    "statusCode": 200,
    "data": {
        "summary": {
            "totalOrders": 0,
            "totalInvestment": 0,
            "pendingOrders": 0,
            "assetCurrency": "INR"
        },
        "orders": [],
        "pagination": {
            "currentPage": 1,
            "totalPages": 0,
            "totalItems": 0,
            "itemsPerPage": 10
        }
    }
}
}`,
        },
      },
    ],
  },
];
