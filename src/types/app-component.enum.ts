/**
 * Объект с интерфейсами приложения
 * Интерфейсы участвуют при внедрении зависимостей
 */
export const AppComponent = {
  RestApplication: Symbol.for('RestApplication'),
  LoggerInterface: Symbol.for('LoggerInterface'),
  ConfigInterface: Symbol.for('ConfigInterface'),
  DatabaseClientInterface: Symbol.for('DatabaseClientInterface'),
  UserServiceInterface: Symbol.for('UserServiceInterface'),
  UserModel: Symbol.for('UserModel'),
  OfferServiceInterface: Symbol.for('OfferServiceInterface'),
  OfferModel: Symbol.for('OfferModel'),
} as const;
