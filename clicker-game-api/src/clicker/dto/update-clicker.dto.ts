import { PartialType } from '@nestjs/mapped-types';
import { CreateClickerDto } from './create-clicker.dto';

export class UpdateClickerDto extends PartialType(CreateClickerDto) {
    boost_clicker: number;
}
