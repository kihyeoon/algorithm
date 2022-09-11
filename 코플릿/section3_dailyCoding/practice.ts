interface SStorage<T> {
  [key: string]: T;
}

// 제네릭을 클래스로 보내고, 클래스는 제네릭을 인터페이스로 보낸 뒤에, 인터페이스는 제네릭을 사용한다.
class LocalStorage<T> {
  private storage: SStorage<T> = {};
  set(key: string, item: T) {
    this.storage[key] = item;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringStorage = new LocalStorage<string>();
stringStorage.set("name", "kim");
stringStorage.get("name");

const numberStorage = new LocalStorage<number>();
numberStorage.set("age", 20);
numberStorage.get("age");

const objectStorage = new LocalStorage<object>();
objectStorage.set("obj", { name: "kim", age: 20 });
objectStorage.get("obj");

const booleanStorage = new LocalStorage<boolean>();
booleanStorage.set("flag", true);
booleanStorage.get("flag");
