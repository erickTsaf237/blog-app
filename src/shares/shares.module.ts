import { Module } from '@nestjs/common';
import { SharesController } from './shares.controller';
import { SharesService } from './shares.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Share } from './model/shares.model';

@Module({
  imports:[SequelizeModule.forFeature([Share])],
  controllers: [SharesController],
  exports:[SharesService],
  providers: [SharesService]
})
export class SharesModule {}
