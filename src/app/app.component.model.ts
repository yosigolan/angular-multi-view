export class AppComponentModel {

  public isToShowUserProfile: boolean;

  constructor() {
    this.isToShowUserProfile = false;
  }

  public clone(): AppComponentModel {
    let model: AppComponentModel = new AppComponentModel();

    model.isToShowUserProfile = this.isToShowUserProfile;

    return model;
  }
}
