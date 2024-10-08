import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class NotesService {
  constructor(private prisma: PrismaService) {}

  async createNote(data: Prisma.NoteCreateInput) {
    return this.prisma.note.create({
      data,
    });
  }
}
