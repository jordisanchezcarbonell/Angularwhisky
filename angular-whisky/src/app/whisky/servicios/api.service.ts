import { Injectable } from "@angular/core";
import { Whisky } from "../modelos/whisky";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  whiskys: Whisky[] = []; 
  private whuskyBase = "https://javawhisky.herokuapp.com";
  private whiskyUrl = "https://javawhisky.herokuapp.com/api/whisky/all"; // URL to web api
  private whiskyDELETE = "https://javawhisky.herokuapp.com/api/whisky/deleteWhisky"
  private wiskyPOST = "https://javawhisky.herokuapp.com/api/whisky/addWhisky"
  private wiskyupdate = "https://javawhisky.herokuapp.com/api/whisky/updateWhisky/"

  //private whiskyUrl = "http://localhost:8081/api/whisky/all"; // URL to web api
  //private whiskyDELETE = "http://localhost:8081/api/whisky/deleteWhisky"
  //private wiskyPOST = "http://localhost:8081/api/whisky/addWhisky"
  //private wiskyupdate = "http://localhost:8081/api/whisky/updateWhisky/"
 
  constructor(private http: HttpClient) { }

  public getWhiskey(): Observable<Whisky[]> {
    console.log(this.whiskyUrl)
    return this.http.get<Whisky[]>(this.whiskyUrl);
  }
  addWhisky(whisky: Whisky): Observable<Whisky> {
      
    return this.http.post<Whisky>(this.wiskyPOST, whisky);
  }


  updateWhisky(whisky: Whisky): Observable<Whisky> {
      console.log(this.wiskyupdate)
    return this.http.put<Whisky>(this.wiskyupdate, whisky);
  }
  deleteWhisky(id: number): Observable<Whisky> {
      console.log(`${this.whiskyDELETE}/${id}`)
    return this.http.delete<Whisky>(`${this.whiskyDELETE}/${id}`);
  }
}
