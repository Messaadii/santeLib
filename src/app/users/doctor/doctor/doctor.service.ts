import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppointmentDocInfoGet } from 'src/model/AppointmentDocInfoGet';
import { doctor } from 'src/model/Doctor';
import { DoctorGet } from 'src/model/Doctorget';
import { DoctorPostWithSecureLogin } from 'src/model/DoctorPostWithSecureLogin';
import { FiveStringsPost } from 'src/model/FiveStringsPost';
import { IntegerAndStringPost } from 'src/model/IntegerAndStringPost';
import { OneStringPost } from 'src/model/OneStringPost';
import { SecureLoginString } from 'src/model/SecureLoginString';
import { TwoStringsPost } from 'src/model/TwoStringsPost';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }

  public getDoctorInfo(secureLogin:SecureLoginString){
    return this.http.post<DoctorGet>("http://localhost:8080/doctor/getDoctorInfoFromSecureLogin",secureLogin);
  }

  public updateDoctorInfoBySecureLogin(doctorPostWithSecureLogin:DoctorPostWithSecureLogin){
    return this.http.post<string>("http://localhost:8080/doctor/updateDoctorInfoBySecureLogin",doctorPostWithSecureLogin,{responseType:'text' as 'json'});
  }

  public updateDoctorProfilePhoto(uploadImageData:FormData){
    return this.http.post<string>('http://localhost:8080/image/upload', uploadImageData, {responseType: 'text' as 'json'});
  }
  public getDoctorPofilePhoto(imageName:string){
    return this.http.get<string>('http://localhost:8080/image/get/' + imageName)
  }

  public changeDoctorStatusBySecureId(twoStringsPost:TwoStringsPost){
    return this.http.post<string>('http://localhost:8080/doctor/changeDoctorStatusBySecureId', twoStringsPost, {responseType: 'text' as 'json'})
  }

  public checkIfDocumentExist(oneStringPost:OneStringPost){
    return this.http.post<boolean>('http://localhost:8080/image/checkIfDocumentExist', oneStringPost)
  }

  public changeDoctorStatusById(twoStringsPost:TwoStringsPost){
    return this.http.post<string>('http://localhost:8080/doctor/changeDoctorStatusById', twoStringsPost, {responseType: 'text' as 'json'})
  }

  public updateDoctorSettingsBySecurelogin(fiveStringsPost:FiveStringsPost){
    return this.http.post<string>('http://localhost:8080/doctor/updateDoctorSettingsBySecurelogin', fiveStringsPost, {responseType: 'text' as 'json'})
  }

  public deleteByImageName(imageName:string){
    return this.http.delete<number>('http://localhost:8080/image/deleteByImageName/'+imageName);
  }

  public deteleDoctorById(id:number){
    return this.http.delete<number>('http://localhost:8080/doctor/deteleDoctorById/'+id);
  }

  public addspecialityTodoctor(integerAndStringPost:IntegerAndStringPost){
    return this.http.post<string>('http://localhost:8080/doctor/addspeciality', integerAndStringPost, {responseType: 'text' as 'json'})
  }

  public getApprovedDoctorsBySpecialityId (specialityId:number){
    return this.http.get<doctor []>('http://localhost:8080/doctor/getApprovedDoctorsBySpecialityId/'+specialityId);
  } 

  public getDoctorAppointmentInfoByDoctorId (docId:number){
    return this.http.get<AppointmentDocInfoGet>('http://localhost:8080/doctor/getDoctorAppointmentInfoByDoctorId/'+docId);
  } 
}