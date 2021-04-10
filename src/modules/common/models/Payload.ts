interface IPayloadInit {
  status: 'init';
}

interface IPayloadLoading {
  status: 'loading';
}

interface IPayloadLoaded<T> {
  status: 'loaded';
  payload: T;
}

interface IPayloadError {
  status: 'error';
  error: Error;
}

export type Payload<T> =
  | IPayloadInit
  | IPayloadLoading
  | IPayloadLoaded<T>
  | IPayloadError;
