import { Response, Request } from 'express';
import { emojis } from '../../../../utils/Emoji';

class ListEmojiController {
  handle(request: Request, response: Response) {
    return response.json(emojis);
  }
}

export { ListEmojiController };
