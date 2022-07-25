import { CognitoUserPool , CognitoUserAttribute} from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId : "us-east-1_ZhLnDZkfj",
    ClientId : "4gu6kckcd3tr7p0msuncjtk4r3"
}

export default new CognitoUserPool(poolData);