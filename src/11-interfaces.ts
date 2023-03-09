export interface Drive {
  database: string;
  password: string;
  port: number;
  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

const drive: Drive = {
  database: 'postgres',
  password: '123456',
  port: 5432,
  connect() {
    // code
  },
  disconnect: function (): void {
    throw new Error('Function not implemented.');
  },
  isConnected: function (name: string): boolean {
    throw new Error('Function not implemented.');
  },
};
// TODO: debe cumplir con un estandar de interfaz
class PostgresDrive implements Drive {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  disconnect(): void {
    throw new Error('Method not implemented.');
  }
  isConnected(name: string): boolean {
    throw new Error('Method not implemented.');
  }
  connect(): void {
    // code
  }
}

class OracleDrive implements Drive {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  disconnect(): void {
    throw new Error('Method not implemented.');
  }
  isConnected(name: string): boolean {
    throw new Error('Method not implemented.');
  }
  connect(): void {
    // code
  }
}
