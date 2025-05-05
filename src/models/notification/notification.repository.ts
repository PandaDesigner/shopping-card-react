import Swal , {type SweetAlertResult , type SweetAlertIcon} from 'sweetalert2';

export interface AlertOptions {
    title: string;
    text?: string;
    icon?: SweetAlertIcon;
    confirmButtonText?: string;
    cancelButtonText?: string;
    showCancelButton?: boolean;
    showCloseButton?: boolean;
    timer?: number;
}

export class NotificationRepository {
    public async showAlert(options: AlertOptions): Promise<SweetAlertResult> {
        const {
            title,
            text,
            icon,
            confirmButtonText = 'OK',
            cancelButtonText = 'Cancel',
            showCancelButton = false,
            showCloseButton = false,
            timer
        } = options;

        return await Swal.fire({
            title,
            text,
            icon,
            confirmButtonText,
            cancelButtonText,
            showCancelButton,
            showCloseButton,
            timer
        });
    }

    public async success(title:string, text?:string): Promise<SweetAlertResult> {
        return await this.showAlert({
            title,
            text,
            icon: 'success',
            confirmButtonText: 'OK',
            showCloseButton: true
        });
    }

    public async error(title:string, text?:string): Promise<SweetAlertResult> {
        return await this.showAlert({
            title,
            text,
            icon: 'error',
            confirmButtonText: 'OK',
            showCloseButton: true
        });
    }

    public async warning(title:string, text?:string): Promise<SweetAlertResult> {
        return await this.showAlert({
            title,
            text,
            icon: 'warning',
            confirmButtonText: 'OK',
            showCloseButton: true
        });
    }

    public async confirm(title:string, text?:string): Promise<SweetAlertResult> {
        return await this.showAlert({
            title,
            text,
            confirmButtonText: 'Sí',
            icon: 'question',
            cancelButtonText: 'No',
            showCancelButton: true,
            showCloseButton: true
        });
    }

    public async timedAlert(title:string, text?:string, timer:number = 2000): Promise<SweetAlertResult> {
        return await this.showAlert({
            title,
            text,
            icon: 'info',
            confirmButtonText: 'OK',
            showCloseButton: true,
            timer
        });
    }

    public async prompt(title:string = "Ingrese un valor", text?:string): Promise<SweetAlertResult> {
        return await this.showAlert({
            title,
            text,
            icon: 'question',
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            showCloseButton: true
        });
    }

    public async toast(title:string, text?:string, icon:SweetAlertIcon = 'info', timer:number = 2000): Promise<SweetAlertResult> {
        return await Swal.fire({
            title,
            text,
            icon,
            toast: true,
            position: 'top-end',
            showCloseButton: true,
            showConfirmButton: false,
            timer,
            timerProgressBar: true,
            customClass: {
                popup: 'bg-white shadow-lg rounded-lg p-4'
            }
        });
    }
}