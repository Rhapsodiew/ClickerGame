import { PartialType } from '@nestjs/mapped-types';
import { CreateUserClickerDto } from './create-user_clicker.dto';

export class UpdateUserClickerDto extends PartialType(CreateUserClickerDto) {}
