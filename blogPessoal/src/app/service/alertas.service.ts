import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { AlertasComponent } from '../alertas/alertas.component';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(
    private bsModelService: BsModalService
  ) { }

    private showAlert(message: string, type: String){
      const bsModalRef: BsModalRef = this.bsModelService.show(AlertasComponent)
      bsModalRef.content.type = type
      bsModalRef.content.message = message
    }

    showAlertDanger(message: string){
      this.showAlert(message, 'danger')
    }

    showAlertSuccess(message: string){
      this.showAlert(message, 'success')
    }

    showAlertInfo(message: string){
      this.showAlert(message, 'info')
    }
}
