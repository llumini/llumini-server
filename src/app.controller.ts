import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { NotesService } from './notes/note.service';

interface NoteContent {
  [key: string]: any;
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly notesService: NotesService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('note')
  async createNote(@Body() data: { title: string; content: NoteContent }) {
    const { title, content } = data;

    return this.notesService.createNote({
      title,
      content,
    });
  }
}
