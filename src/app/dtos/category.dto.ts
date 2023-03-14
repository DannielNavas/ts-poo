import {
  IsEnum,
  IsNotEmpty,
  IsUrl,
  Length,
  validateOrReject,
} from 'class-validator';
import { AccessType, Category } from '../category.model';
export interface ICreateCategoryDto extends Omit<Category, 'id'> {}

// A diferencia de TypeScript,
// los decoradores No van a decir los errores de forma inmediata.
// Dan feedback hasta el runtime.
// Agregan validaciones y comportamientos extra

export class CreateCategoryDto implements ICreateCategoryDto {
  creationAt!: string;
  updatedAt!: string;
  @IsNotEmpty()
  @Length(10, 100)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsNotEmpty()
  @IsEnum(AccessType)
  access?: AccessType;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'test test test';
    dto.image = 'https://www.google.com';
    dto.access = AccessType.PRIVATE;
    await validateOrReject(dto);
    console.log(dto);
  } catch (error) {
    console.error(error);
  }
})();
