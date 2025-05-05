import {NotificationRepository} from "@/models/notification/notification.repository.ts";


export class NotificationService {

    private notificationRepository: NotificationRepository;
    constructor() {
        this.notificationRepository = new NotificationRepository();
    }
    public async showSuccess(title:string, text?:string): Promise<void> {
        await this.notificationRepository.success(title, text);
    }

    public async showError(title:string, text?:string): Promise<void> {
        await this.notificationRepository.error(title, text);
    }
    public async showWarning(title:string, text?:string): Promise<void> {
        await this.notificationRepository.warning(title, text);
    }
    public async showConfirm(title:string, text?:string): Promise<boolean> {
        const result = await this.notificationRepository.confirm(title, text);
        return result.isConfirmed;
    }
    public async showToast(title:string, text?:string): Promise<void> {
        await this.notificationRepository.toast(title, text);
    }
}