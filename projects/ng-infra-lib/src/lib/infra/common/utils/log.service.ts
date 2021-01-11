import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  public write(message?: any, ...optionalParams: any[]) {
    console.log('----------- NG LOG -----------');
    console.log(message, optionalParams);
    console.log('-------- END OF NG LOG -------');
  }
}
