import { InjectionToken } from '@angular/core';
import { AppConfig } from './appConfig.interface';
// import {} from "../../environment"

export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.config');

export const APP_CONFIG: AppConfig = {
  // ideally should be place in an environment folder
  apiEndpoint: 'http://localhost:8000/api/v1',
};
