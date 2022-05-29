import { Module } from '@nestjs/common';
import { PossessController } from './possess.controller';
import { PossessService } from './possess.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Possess } from './model/possess.model';

@Module({
  imports:[SequelizeModule.forFeature([Possess])],
  controllers: [PossessController],
  exports:[PossessService],
  providers: [PossessService]
})
export class PossessModule {}
