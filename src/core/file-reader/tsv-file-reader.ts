import { EventEmitter } from 'node:events';
import { FileReaderInterface } from './file-reader.interface.js';

/**
 * Класс для чтения tsv-файлов
 */
export default class TSVFileReader extends EventEmitter implements FileReaderInterface {
  constructor(public filename: string) {
    super();
  }

  public async read(): Promise<void> {
    // Код для работы с потоками
  }
}
