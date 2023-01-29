const { spec } = require('pactum');
const {
    string
} = require("pactum-matchers");

describe("CALCULATOR", function () {

    it('Check calculator response', async () => {
        await spec()
            .post('https://sport-calc.azurewebsites.net/Predict')
            .withBody(
                {
                    "personelDetail": {
                        "firstname": "Adam",
                        "lastname": "Nowak",
                        "brithDate": "2008-07-23T00:00:00.000Z",
                        "date": "2023-01-23T00:00:00.000Z"
                    },
                    "contInputs": {
                        "body_height_avg": 170,
                        "sitting_height_avg": 74,
                        "maturity_Offset_years": 2,
                        "age_PHV": 13,
                        "bodY_MASS__kg": 57,
                        "calendaR_AGE__years": 15,
                        "sJ_AVG": 23,
                        "cmJ_avg": 32,
                        "besT_5M": 1.01,
                        "besT_10M": 1.7,
                        "besT15M": 2.56,
                        "besT_20M": 3.2,
                        "besT_25M": 3.9,
                        "besT_30M": 4.38
                    }
                }
            )
            .expectStatus(200)
            .expectJsonMatch({
                "personelDetail": {
                    "firstname": "Adam",
                    "lastname": "Nowak",
                    "brithDate": "2008-07-23T00:00:00Z"
                },
                "contInputs": {
                    "body_height_avg": 170,
                    "sitting_height_avg": 74,
                    "maturity_Offset_years": 2,
                    "age_PHV": 13,
                    "bodY_MASS__kg": 57,
                    "calendaR_AGE__years": 15,
                    "sJ_AVG": 23,
                    "cmJ_avg": 32,
                    "besT_5M": 1.01,
                    "besT_10M": 1.7,
                    "besT15M": 2.56,
                    "besT_20M": 3.2,
                    "besT_25M": 3.9,
                    "besT_30M": 4.38
                },
                "date": string(),
                "rezult": 4.148025583453674
            });
    });
});