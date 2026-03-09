import { Section } from "./api-data";

export const Spv: Section[] = [
  {
    id: "spv",
    title: "SPV (Special Purpose Vehicle)",
    description: "Manage Special Purpose Vehicle operations",
    endpoints: [
      {
        id: "spv-list",
        title: "SPVs List",
        method: "GET",
        path: "/api/company/company-list?status=active&page=1&limit=10",
        description: "Retrieve list of all SPVs",
        parameters: [
          {
            name: "limit",
            type: "number",
            description: "Records per page",
            required: false,
          },
          {
            name: "status",
            type: "string",
            description: "Records per page",
            required: false,
          },
          {
            name: "page",
            type: "number",
            description: "Records per page",
            required: false,
          },
        ],
        request: {
          description: "Get all SPVs",
          example: `GET /api/spv?limit=25 HTTP/1.1`,
        },
        response: {
          description: "Returns array of SPV objects",
          example: `{
 {
    "data": [
        {
            "_id": "699ebb2ef6176fc097a630a7",
            "name": "My HoME sPACE",
            "OnchainAddress": "0x0C0EB4d1527E04855a7f99A687025d8832780765",
            "type": "partnership",
            "status": "active",
            "currency": "INR",
            "logo": null,
            "completedSteps": [
                "basic-information",
                "memo-terms",
                "escrow-bank-details",
                "legal-documents",
                "board-members",
                "dao-integration"
            ],
            "createdAt": "2026-02-25T09:04:46.814Z",
            "updatedAt": "2026-02-25T09:27:03.751Z",
            "aum": 0,
            "totalInvestors": 0,
            "completedStepsCount": 6
        },
        {
            "_id": "698c4ce0f6176fc097a3cc5b",
            "name": "Vajra Assets",
            "OnchainAddress": "0x5835487359e168b6CE07293731f0a1175B16ccfb",
            "type": "llc",
            "status": "active",
            "currency": "INR",
            "logo": null,
            "completedSteps": [
                "basic-information",
                "memo-terms",
                "escrow-bank-details",
                "legal-documents",
                "board-members",
                "dao-integration"
            ],
            "createdAt": "2026-02-11T09:33:20.483Z",
            "updatedAt": "2026-02-12T07:42:27.031Z",
            "aum": 20400000,
            "totalInvestors": 0,
            "completedStepsCount": 6
        },
        {
            "_id": "697b221362d747a2211113ba",
            "name": "Teja",
            "OnchainAddress": null,
            "type": "llc",
            "status": "active",
            "currency": "INR",
            "logo": null,
            "completedSteps": [
                "basic-information",
                "memo-terms",
                "escrow-bank-details",
                "legal-documents",
                "board-members",
                "dao-integration"
            ],
            "createdAt": "2026-01-29T09:02:11.336Z",
            "updatedAt": "2026-02-12T07:47:04.742Z",
            "aum": 0,
            "totalInvestors": 0,
            "completedStepsCount": 6
        },
        {
            "_id": "69736f0c62d747a2211023f2",
            "name": "Alpha Capital SPV",
            "OnchainAddress": "0x83FA30603fF445bE169edBdbB14970901fD95908",
            "type": "private-limited",
            "status": "active",
            "currency": "INR",
            "logo": null,
            "completedSteps": [
                "basic-information",
                "memo-terms",
                "escrow-bank-details",
                "legal-documents",
                "board-members",
                "dao-integration"
            ],
            "createdAt": "2026-01-23T12:52:28.701Z",
            "updatedAt": "2026-01-30T11:09:40.940Z",
            "aum": 3069400,
            "totalInvestors": 0,
            "completedStepsCount": 6
        },
        {
            "_id": "6965e12920b7435320244ce4",
            "name": "Test SPV Name",
            "OnchainAddress": "0x0739788Be0b81dE39dDAE2cE57f6eB42a289Add9",
            "type": "llc",
            "status": "active",
            "currency": "INR",
            "logo": null,
            "completedSteps": [
                "basic-information",
                "memo-terms",
                "escrow-bank-details",
                "legal-documents",
                "board-members",
                "dao-integration"
            ],
            "createdAt": "2026-01-13T06:07:37.294Z",
            "updatedAt": "2026-01-30T06:12:28.723Z",
            "aum": 127500000000,
            "totalInvestors": 0,
            "completedStepsCount": 6
        },
        {
            "_id": "6960942000e3c244e938e7b5",
            "name": "Test SPV123",
            "OnchainAddress": "0xDBa8F78Ab5036B185b35E0A69148E842864dA912",
            "type": "dao-llc",
            "status": "active",
            "currency": "INR",
            "logo": null,
            "completedSteps": [
                "basic-information",
                "memo-terms",
                "escrow-bank-details",
                "legal-documents",
                "board-members",
                "dao-integration"
            ],
            "createdAt": "2026-01-09T05:37:36.740Z",
            "updatedAt": "2026-01-13T06:28:18.311Z",
            "aum": 1020000,
            "totalInvestors": 0,
            "completedStepsCount": 6
        },
        {
            "_id": "695b5e2100e3c244e937e784",
            "name": "Vantage Towers SPV",
            "OnchainAddress": "0xcD13F0cf626684DcB49CeE740fbf9D8ddD7b1CA4",
            "type": "llc",
            "status": "active",
            "currency": "INR",
            "logo": null,
            "completedSteps": [
                "basic-information",
                "memo-terms",
                "escrow-bank-details",
                "legal-documents",
                "board-members",
                "dao-integration"
            ],
            "createdAt": "2026-01-05T06:45:53.679Z",
            "updatedAt": "2026-01-05T07:23:56.083Z",
            "aum": 53500000,
            "totalInvestors": 0,
            "completedStepsCount": 6
        },
        {
            "_id": "695650a4d9ab739bcfc59446",
            "name": "Pearl Horizon Property SPV",
            "OnchainAddress": "0x8Ca96dE3860B07A646dD7A255fB0cE57c20F0cA0",
            "type": "llc",
            "status": "active",
            "currency": "QAR",
            "logo": null,
            "completedSteps": [
                "basic-information",
                "memo-terms",
                "escrow-bank-details",
                "legal-documents",
                "board-members",
                "dao-integration"
            ],
            "createdAt": "2026-01-01T10:47:00.962Z",
            "updatedAt": "2026-01-05T06:09:10.628Z",
            "aum": 7950000,
            "totalInvestors": 3,
            "completedStepsCount": 6
        },
        {
            "_id": "6954e32b6c606ce25cc8ebf6",
            "name": "Estate",
            "OnchainAddress": "0xC42767ec1791Bb0B0Dd871b1834942980753E3B1",
            "type": "private-limited",
            "status": "active",
            "currency": "AED",
            "logo": null,
            "completedSteps": [
                "basic-information",
                "memo-terms",
                "escrow-bank-details",
                "legal-documents",
                "board-members",
                "dao-integration"
            ],
            "createdAt": "2025-12-31T08:47:39.542Z",
            "updatedAt": "2026-01-12T10:36:30.883Z",
            "aum": 10200,
            "totalInvestors": 0,
            "completedStepsCount": 6
        },
        {
            "_id": "694bb8cf6c606ce25cc84438",
            "name": "HarbourView Property SPV Ltd",
            "OnchainAddress": "0x2F3ac0712fB5B3B7d4ed977063320c819F021559",
            "type": "private-limited",
            "status": "active",
            "currency": "GBP",
            "logo": null,
            "completedSteps": [
                "basic-information",
                "memo-terms",
                "escrow-bank-details",
                "legal-documents",
                "board-members",
                "dao-integration"
            ],
            "createdAt": "2025-12-24T09:56:31.206Z",
            "updatedAt": "2025-12-24T10:02:48.592Z",
            "aum": 5400000,
            "totalInvestors": 3,
            "completedStepsCount": 6
        }
    ],
    "pagination": {
        "currentPage": 1,
        "limit": 10,
        "totalPages": 2,
        "totalCount": 15,
        "hasNext": true,
        "hasPrevious": false
    },
    "message": "Companies retrieved successfully"
}
}`,
        },
      },

      {
        id: "spv-list",
        title: "SPVs List",
        method: "GET",
        path: "/api/company/699ebb2ef6176fc097a630a7",
        description: "Retrieve list of all SPVs",
        parameters: [
          {
            name: "id",
            type: "String",
            description: "Records per page",
            required: true,
          },
        ],
        request: {
          description: "Get all SPVs",
          example: `GET /api/spv?limit=25 HTTP/1.1`,
        },
        response: {
          description: "Returns array of SPV objects",
          example: `{
 {
    "success": true,
    "message": "Company retrieved successfully",
    "statusCode": 200,
    "data": {
        "_id": "699ebb2ef6176fc097a630a7",
        "name": "My HoME sPACE",
        "OnchainAddress": "0x0C0EB4d1527E04855a7f99A687025d8832780765",
        "type": "partnership",
        "jurisdiction": "IN",
        "blockchainCompanyId": "21",
        "formationDate": "2025-12-31T18:30:00.000Z",
        "businessPurpose": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "status": "active",
        "currency": "INR",
        "logo": null,
        "memoAndTerms": {
            "investmentMemorandum": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "termsAndConditions": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "riskFactor": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "investmentStrategy": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        "escrowBankDetails": {
            "bankName": "YOB Pay",
            "accountType": "escrow-bank-account",
            "accountNumber": "000036485786",
            "routingNumber": null,
            "ifscCode": "HDFC0001234",
            "bankStatement": null
        },
        "legalDocuments": {
            "llcOperatingAgreement": {
                "name": "Ryzer_Data_Encryption_Architecture_Document.pdf",
                "url": "https://storage.googleapis.com/ryzer-v2/companies/699ebb2ef6176fc097a630a7/389dc155-fc2a-4f25-8132-482409926344.pdf",
                "_id": "699ec04ef6176fc097a630f0"
            },
            "articlesOfAssociation": {
                "name": "Ryzer_Data_Encryption_Architecture_Document.pdf",
                "url": "https://storage.googleapis.com/ryzer-v2/companies/699ebb2ef6176fc097a630a7/3df05cfd-aedc-49ab-84fa-ab0c73595cd0.pdf",
                "_id": "699ec04ef6176fc097a630ef"
            },
            "memorandumOfAssociation": {
                "name": "Ryzer_Data_Encryption_Architecture_Document.pdf",
                "url": "https://storage.googleapis.com/ryzer-v2/companies/699ebb2ef6176fc097a630a7/625da2b3-5d3c-47c5-b8a1-d18f58746ced.pdf",
                "_id": "699ec04ef6176fc097a630ee"
            },
            "otherDocuments": null
        },
        "boardOfDirectors": {
            "treasuryManager": {
                "name": null,
                "email": null,
                "phoneNumber": null,
                "idNumber": null,
                "idProof": null
            },
            "assetManager": {
                "name": null,
                "email": null,
                "phoneNumber": null,
                "idNumber": null,
                "idProof": null
            },
            "additionalBoardMembers": [
                {
                    "_id": "699ebf9cf6176fc097a630d7",
                    "companyId": "699ebb2ef6176fc097a630a7",
                    "fullName": "Anas M",
                    "email": "anas@ryzer.app",
                    "countryCode": "+91",
                    "phoneNumber": "9705992379",
                    "idNumber": "1234 5678 9012",
                    "idProof": {
                        "name": "antique gold earrings.jpeg",
                        "url": "https://storage.googleapis.com/ryzer-v2/companies/699ebb2ef6176fc097a630a7/e00448df-975a-4231-8eb8-9a481bf9fecd.jpeg",
                        "_id": "699ebf9cf6176fc097a630d8"
                    },
                    "role": "treasury-manager",
                    "createdAt": "2026-02-25T09:23:40.674Z",
                    "updatedAt": "2026-02-25T09:23:40.674Z",
                    "__v": 0
                },
                {
                    "_id": "699ebfd5f6176fc097a630e7",
                    "companyId": "699ebb2ef6176fc097a630a7",
                    "fullName": "rajesh",
                    "email": "rajesh@ryzer.app",
                    "countryCode": "+91",
                    "phoneNumber": "9781911231",
                    "idNumber": "1234 5678 9012",
                    "idProof": {
                        "name": "Ryzer_Data_Encryption_Architecture_Document.pdf",
                        "url": "https://storage.googleapis.com/ryzer-v2/companies/699ebb2ef6176fc097a630a7/c6f20689-fc99-4ca3-aeae-a07a1bf8e0ea.pdf",
                        "_id": "699ebfd5f6176fc097a630e8"
                    },
                    "role": "asset-manager",
                    "createdAt": "2026-02-25T09:24:37.599Z",
                    "updatedAt": "2026-02-25T09:24:37.599Z",
                    "__v": 0
                }
            ]
        },
        "daoConfiguration": {
            "daoName": "InvestDAO178",
            "tokenSymbol": "INV_DAO",
            "blockchain": "xdc",
            "governanceModel": null,
            "proposalThresholdPercent": null,
            "quorumPercent": null,
            "votingPeriod": {
                "days": null,
                "hours": null
            },
            "decisionType": null,
            "governanceRights": {
                "votingRights": true,
                "proposalCreation": true,
                "adminVotePower": true
            },
            "issuerRepSignature": true
        },
        "completedSteps": [
            "basic-information",
            "memo-terms",
            "escrow-bank-details",
            "legal-documents",
            "board-members",
            "dao-integration"
        ],
        "createdAt": "2026-02-25T09:04:46.814Z",
        "updatedAt": "2026-02-25T09:27:03.751Z",
        "__v": 0,
        "assets": [
            {
                "_id": "699ec139f6176fc097a63574",
                "adminId": null,
                "companyId": "699ebb2ef6176fc097a630a7",
                "class": "real-estate",
                "category": "residential",
                "stage": "fully-rented",
                "style": "building",
                "currency": "INR",
                "instrumentType": "equity",
                "metadata": {
                    "places": {
                        "IN": "India",
                        "AP": "Andhra Pradesh"
                    }
                },
                "assetAddress": null,
                "status": "inactive",
                "bookmarks": 0,
                "name": "My Home Bhooja Space",
                "about": "U63910RJ2026PTC110277U63910RJ2026PTC110277U63910RJ2026PTC110277U63910RJ2026PTC110277U63910RJ2026PTC110277U63910RJ2026PTC110277U63910RJ2026PTC110277U63910RJ2026PTC110277U63910RJ2026PTC110277",
                "country": "IN",
                "state": "AP",
                "city": "Bhimavaram",
                "landmark": "Creek Marina Promenade",
                "latitude": null,
                "longitude": null,
                "hasGlobalFeePercentagesSynced": false,
                "hasGlobalFAQsSynced": false,
                "hasGlobalRiskFactorsSynced": false,
                "hasGlobalRiskDisclosuresSynced": false,
                "hasGlobalAdditionalTaxesSynced": false,
                "hasGlobalExitOpportunitiesSynced": false,
                "totalNumberOfSfts": 0,
                "pricePerSft": 0,
                "basePropertyValue": 0,
                "totalPropertyValueAfterFees": 0,
                "investmentPerformance": {
                    "targetCapitalAppreciation": 0,
                    "numberOfYears": 0,
                    "signatureDocuments": [],
                    "netInvestmentMultiplier": 0,
                    "estimatedSalePriceAsPerLockInPeriod": 0,
                    "capitalGains": 0,
                    "capitalGainsTax": 0,
                    "estimatedReturnsAsPerLockInPeriod": 0,
                    "interestRateonReserves": 0,
                    "netRentalYield": 0,
                    "grossRentalYield": 0,
                    "irr": 0,
                    "moic": 0,
                    "latestPropertyValue": 0,
                    "latestPropertyValueDate": null
                },
                "investorRequirementsAndTimeline": {
                    "investorAcreditation": "open-to-all",
                    "kycOrAmlRequirements": "required-for-all",
                    "lockupPeriod": 0,
                    "lockupPeriodType": "months",
                    "rentalYield": 0,
                    "distributionStartDate": null,
                    "distributionEndDate": null
                },
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
                "escrowInformation": {
                    "country": "",
                    "state": "",
                    "escrowBank": "",
                    "escrowAgent": ""
                },
                "legalAdivisory": {
                    "name": "",
                    "document": null
                },
                "assetManagementCompany": {
                    "name": "",
                    "document": null
                },
                "brokerage": {
                    "name": "",
                    "document": null
                },
                "loanInformation": {
                    "hasAssetPossesLoan": false,
                    "currentLoanAmount": 0,
                    "totalNumberOfYears": 0,
                    "totalLoanAmount": 0,
                    "numberOfEMIsYetToPay": 0,
                    "interestRate": 0,
                    "pendingLoanAmount": 0,
                    "bankName": "",
                    "brankBranch": ""
                },
                "tokenInformation": {
                    "tokenSymbol": null,
                    "tokenSupply": 0,
                    "minimumTokensToBuy": 0,
                    "maximumTokensToBuy": 0,
                    "availableTokensToBuy": 0,
                    "tokenPrice": 0,
                    "blockchainProjectAddress": null,
                    "blockchainEscrowAddress": null,
                    "blockchainOrderManagerAddress": null,
                    "blockchainDaoAddress": null
                },
                "media": {
                    "imageURL": "",
                    "videoURL": "",
                    "gallery": [],
                    "pitchDeckURL": ""
                },
                "hostedBy": {
                    "name": "",
                    "isVerified": false,
                    "address": "",
                    "phone": "",
                    "email": "",
                    "website": "",
                    "logoURL": "",
                    "whatsappNumber": "",
                    "totalProjects": 0,
                    "onGoingProjects": 0,
                    "primeLocation": "",
                    "about": "",
                    "yearEstablished": null
                },
                "createdAt": "2026-02-25T09:30:33.199Z",
                "updatedAt": "2026-02-25T09:30:33.199Z",
                "__v": 0,
                "features": [],
                "totalInvestedAmount": 0
            }
        ],
        "completedStepsCount": 6
    }
}
}`,
        },
      },
      

     
    ],
  },
];
