/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ApiKeyResponse {
    /** API key for authenticating future requests */
    apiKey: string;
    /** Expiration timestamp of the API key */
    expiresAt?: Date;
}
