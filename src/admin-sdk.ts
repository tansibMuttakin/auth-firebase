import * as admin from 'firebase-admin';
import * as serviceAccount from './auth/firebase_service_account.json';

const firebase_params = {
    type: serviceAccount.type,
    projectId: serviceAccount.project_id,
    privateKeyId: serviceAccount.private_key_id,
    privateKey: serviceAccount.private_key,
    clientEmail: serviceAccount.client_email,
    clientId: serviceAccount.client_id,
    authUri: serviceAccount.auth_uri,
    tokenUri: serviceAccount.token_uri,
    authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
    clientc509CertUrl: serviceAccount.client_x509_cert_url
}

admin.initializeApp({
    credential:admin.credential.cert(firebase_params),
    databaseURL: "https://gifty-2e899.firebaseio.com"
});