import { IsString, IsUrl } from "class-validator";

export class CreateLinkDto {
    @IsString()
    userId: string;
    @IsString()
    name: string;
    @IsUrl()
    url: string;
}
