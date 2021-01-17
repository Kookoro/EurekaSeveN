export class RegisterInfoDTO {
  readonly accountName: string | number;
  readonly realName: string;
  readonly password: string;
  readonly repassword: string;
  readonly mobile: number;
}
export interface DTOAdminInfo {
  readonly adminName: string | number;
}
