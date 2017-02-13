import { Injectable } from '@angular/core';

export abstract class StoreBackend {
	[key: string]: any;
	abstract removeItem(key: string): void;
}

@Injectable()
export class Store {
	constructor(private backend: StoreBackend) {}

	get<TDataType>(key: string): TDataType {
		return JSON.parse(this.backend[key]);
	}

	set<TDataType>(key: string, value: TDataType): void {
		if (value == null) {
			this.backend.removeItem(key);
			return;
		}

		this.backend[key] = JSON.stringify(value);
	}
}