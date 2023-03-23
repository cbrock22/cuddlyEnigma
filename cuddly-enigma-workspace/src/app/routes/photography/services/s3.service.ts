import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';

@Injectable({
  providedIn: 'root'
})
export class S3Service {

  constructor() {
    AWS.config.credentials = new AWS.Credentials({
      accessKeyId: 'YOURKEY', secretAccessKey: 'YOURSECRET'
    });

    const params = {
      Bucket: 'so-test-bucket',
      Key: 'index.html'
    };

    let s3Url = 'https://s3-<region>.amazonaws.com/myBucket/';
var bucket = new AWS.S3({params: {Bucket: 'myBucket'}});
  bucket.listObjects(function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      let allImageData = data.Contents;
    }
  });
   }
}
