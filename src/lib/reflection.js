const JavaClass = Java.type('java.lang.Class');

function resolveClass(target) {
  if (target == null) {
    throw new Error('reflection: target is null');
  }

  if (target instanceof JavaClass) {
    return target;
  }

  if (typeof target.getClass === 'function') {
    return target.getClass();
  }

  throw new Error('reflection: expected a Java instance or Class');
}

function collectNames(target, includeInherited, getMembers) {
  const names = [];
  const seen = {};
  let current = resolveClass(target);

  while (current) {
    const members = Java.from(getMembers(current));
    for (let i = 0; i < members.length; i++) {
      const name = String(members[i].getName());
      if (seen[name]) {
        continue;
      }
      seen[name] = true;
      names.push(name);
    }

    current = includeInherited ? current.getSuperclass() : null;
  }

  return names;
}

/**
 * Unique declared method names on a Java instance or Class.
 * Walks superclasses unless includeInherited is false.
 */
export function getMethodNames(target, includeInherited) {
  if (includeInherited === undefined) {
    includeInherited = true;
  }
  return collectNames(target, includeInherited, function (clazz) {
    return clazz.getDeclaredMethods();
  });
}

/**
 * Unique declared field names on a Java instance or Class.
 * Walks superclasses unless includeInherited is false.
 */
export function getFieldNames(target, includeInherited) {
  if (includeInherited === undefined) {
    includeInherited = true;
  }
  return collectNames(target, includeInherited, function (clazz) {
    return clazz.getDeclaredFields();
  });
}
