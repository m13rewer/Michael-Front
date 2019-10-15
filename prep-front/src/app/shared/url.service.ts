import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private static readonly MONOLITH_URL = 'http://ec2-34-230-214-236.compute-1.amazonaws.com:8185';//ec2-34-230-214-236.compute-1.amazonaws.com
  
  constructor() { }
  public getURL() {
    return UrlService.MONOLITH_URL;
  }
}