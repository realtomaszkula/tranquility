type UrlPredicate = (url: string) => boolean;

export const isIndexPage: UrlPredicate = url => url === '/attention-training' || url.startsWith('/attention-training?');
export const isNewPage: UrlPredicate = url => url === '/attention-training/new';
