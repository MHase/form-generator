import { fields } from './sampleForm.json';

const requiredKeys = ['name', 'type'];
const requiredSelectKeys = ['options'];
const requiredOptionsKeys = ['label', 'value'];

describe('JSON form structure', () => {
  const selects = fields.filter(field => field.type === 'select');

  if (
    ('fields should be defined as an array',
    () => {
      expect(!!fields && Array.isArray(fields)).toBeTruthy();
    })
  )
    it('every field has not empty, required keys', () => {
      const passes = fields.every(field =>
        requiredKeys.every(requiredKey => Object.hasOwnProperty.call(field, requiredKey) && field[requiredKey])
      );

      expect(passes).toBe(true);
    });

  it('only select can has a dependant field', () => {
    fields.forEach(field => {
      const keys = Object.keys(field);

      if (keys.includes('dependant')) {
        expect(field.type).toBe('select');
      }
    });
  });

  it('select has required fields', () => {
    const hasRequiredFields = selects.every(select =>
      requiredSelectKeys.every(requiredKey => Object.hasOwnProperty.call(select, requiredKey) && select[requiredKey])
    );
    expect(hasRequiredFields).toBeTruthy();
  });

  it("select's options type depends on dependant value", () => {
    selects.forEach(select => {
      const options = select.options;
      expect(options).toBeDefined();

      if (select.dependant) {
        expect(options.constructor === Object).toBeTruthy();
      } else {
        expect(Array.isArray(options)).toBeTruthy();
      }
    });
  });

  it("select's options should have proper structure", () => {
    selects.forEach(select => {
      const options = select.options;
      expect(options).toBeDefined();

      if (select.dependant) {
        const values = Object.values(options);
        values.every(optionValue => expect(Array.isArray(optionValue)).toBeTruthy());

        values.forEach(optionArray => {
          optionArray.forEach(option => {
            const keys = Object.keys(option);
            expect(requiredOptionsKeys.every(key => keys.includes(key))).toBeTruthy();
          });
        });
      } else {
        const hasProperKeys = options.every(option => {
          const keys = Object.keys(option);
          return requiredOptionsKeys.every(key => keys.includes(key));
        });
        expect(hasProperKeys).toBeTruthy();
      }
    });
  });
});
