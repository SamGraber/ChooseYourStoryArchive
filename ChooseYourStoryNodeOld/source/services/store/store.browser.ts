import { provide, Provider } from '@angular/core';
import { StoreBackend, Store } from './store.service';

export const BROWSER_STORE_PROVIDERS = [
	provide(StoreBackend, { useValue: localStorage }),
	Store,
]