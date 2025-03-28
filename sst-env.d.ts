/* This file is auto-generated by SST. Do not edit. */
/* tslint:disable */
/* eslint-disable */
/* deno-fmt-ignore-file */

declare module "sst" {
  export interface Resource {
    "auth": {
      "type": "sst.aws.Auth"
      "url": string
    }
    "bucket": {
      "name": string
      "type": "sst.aws.Bucket"
    }
    "dashboard": {
      "type": "sst.aws.StaticSite"
      "url": string
    }
    "email": {
      "configSet": string
      "sender": string
      "type": "sst.aws.Email"
    }
    "pg": {
      "database": string
      "host": string
      "password": string
      "port": number
      "type": "sst.aws.Postgres"
      "username": string
    }
    "revokeSubscriptionFunction": {
      "name": string
      "type": "sst.aws.Function"
    }
    "valkey": {
      "host": string
      "password": string
      "port": number
      "type": "sst.aws.Redis"
      "username": string
    }
    "vpc": {
      "type": "sst.aws.Vpc"
    }
    "www": {
      "type": "sst.aws.Nextjs"
      "url": string
    }
  }
}
/// <reference path="sst-env.d.ts" />

import "sst"
export {}