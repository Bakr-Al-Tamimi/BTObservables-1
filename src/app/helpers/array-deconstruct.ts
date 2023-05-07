
function arrayDestruct
  (obj: any): never[];
function arrayDestruct<T, K0 extends keyof T>
  (obj: T, k0: K0): [T[K0]];
function arrayDestruct<T, K0 extends keyof T, K1 extends keyof T>
  (obj: T, k0: K0, k1: K1): [T[K0], T[K1]];
function arrayDestruct<T, K0 extends keyof T, K1 extends keyof T, K2 extends keyof T>
  (obj: T, k0: K0, k1: K1, k2: K2): [T[K0], T[K1], T[K2]];
function arrayDestruct<T, K0 extends keyof T, K1 extends keyof T, K2 extends keyof T>
  (obj: T, k0: K0, k1: K1, k2: K2): [T[K0], T[K1], T[K2]];
function arrayDestruct<T, K0 extends keyof T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T>
  (obj: T, k0: K0, k1: K1, k2: K2, k3: K3): [T[K0], T[K1], T[K2], T[K3]];
function arrayDestruct<T, K0 extends keyof T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T,
  K4 extends keyof T>
  (obj: T, k0: K0, k1: K1, k2: K2, k3: K3, k4: K4): [T[K0], T[K1], T[K2], T[K3], T[K4]];
function arrayDestruct<T, K0 extends keyof T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T,
  K4 extends keyof T, K5 extends keyof T>
  (obj: T, k0: K0, k1: K1, k2: K2, k3: K3, k4: K4, k5: K5): [T[K0], T[K1], T[K2], T[K3], T[K4], T[K5]];
function arrayDestruct<T, K0 extends keyof T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T,
  K4 extends keyof T, K5 extends keyof T, K6 extends keyof T>
  (obj: T, k0: K0, k1: K1, k2: K2, k3: K3, k4: K4, k5: K5, k6: K6):
  [T[K0], T[K1], T[K2], T[K3], T[K4], T[K5], T[K6]];
function arrayDestruct<T, K0 extends keyof T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T,
  K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T>
  (obj: T, k0: K0, k1: K1, k2: K2, k3: K3, k4: K4, k5: K5, k6: K6, k7: K7):
  [T[K0], T[K1], T[K2], T[K3], T[K4], T[K5], T[K6], T[K7]];
function arrayDestruct<T, K0 extends keyof T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T,
  K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T>
  (obj: T, k0: K0, k1: K1, k2: K2, k3: K3, k4: K4, k5: K5, k6: K6, k7: K7, k8: K8):
  [T[K0], T[K1], T[K2], T[K3], T[K4], T[K5], T[K6], T[K7], T[K8]];
function arrayDestruct<T, K0 extends keyof T, K1 extends keyof T, K2 extends keyof T, K3 extends keyof T,
  K4 extends keyof T, K5 extends keyof T, K6 extends keyof T, K7 extends keyof T, K8 extends keyof T,
  Krest extends keyof T>
  (obj: T, k0: K0, k1: K1, k2: K2, k3: K3, k4: K4, k5: K5, k6: K6, k7: K7, k8: K8, ...krest: Krest[]):
  T[K0 | K1 | K2 | K3 | K4 | K5 | K6 | K7 | K8 | Krest][] & {
    0: T[K0], 1: T[K1], 2: T[K2], 3: T[K3], 4: T[K4], 5: T[K5],
    6: T[K6], 7: T[K7], 8: T[K8], 9: T[Krest]
  };
function arrayDestruct<T, K extends keyof T>(obj: T, ...keys: K[]): T[K][] {
  return keys.map(k => obj[k]);
}