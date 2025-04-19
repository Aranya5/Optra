import { useState } from 'react';
import { Combobox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const employees = [
  { id: 1, name: 'Alex Johnson' },
  { id: 2, name: 'Maria Garcia' },
  { id: 3, name: 'James Smith' },
  { id: 4, name: 'Sarah Williams' },
  { id: 5, name: 'David Kim' },
];

const styles = {
  label: "block text-sm font-medium text-slate-300 mb-1",
  inputWrapper: "relative",
  input:
    "w-full rounded-md border border-slate-600 bg-slate-800 text-white py-2 pl-3 pr-10 shadow-sm " +
    "focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm",
  button: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none",
  icon: "h-5 w-5 text-slate-400",
  options:
    "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-slate-800 py-1 text-base " +
    "shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
  option: (active) =>
    `relative cursor-default select-none py-2 pl-3 pr-9 ${
      active ? 'bg-indigo-600 text-white' : 'text-slate-200'
    }`,
  selectedName: (selected) => `block truncate ${selected ? 'font-semibold' : ''}`,
  checkIcon: (active) =>
    `absolute inset-y-0 right-0 flex items-center pr-4 ${active ? 'text-white' : 'text-indigo-400'}`,
};

const EmployeeSelector = ({ onSelect, className }) => {
  const [query, setQuery] = useState('');
  const [selectedPerson, setSelectedPerson] = useState(null);

  const filteredPeople =
    query === ''
      ? employees
      : employees.filter((person) =>
          person.name.toLowerCase().includes(query.toLowerCase())
        );

  const handleChange = (person) => {
    setSelectedPerson(person);
    onSelect(person);
  };

  return (
    <Combobox as="div" value={selectedPerson} onChange={handleChange} className={className}>
      <Combobox.Label className={styles.label}>
        Select Employee
      </Combobox.Label>
      <div className={styles.inputWrapper}>
        <Combobox.Input
          className={styles.input}
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(person) => person?.name}
          placeholder="Search employees..."
        />
        <Combobox.Button className={styles.button}>
          <ChevronUpDownIcon className={styles.icon} aria-hidden="true" />
        </Combobox.Button>

        {filteredPeople.length > 0 && (
          <Combobox.Options className={styles.options}>
            {filteredPeople.map((person) => (
              <Combobox.Option
                key={person.id}
                value={person}
                className={({ active }) => styles.option(active)}
              >
                {({ active, selected }) => (
                  <>
                    <span className={styles.selectedName(selected)}>
                      {person.name}
                    </span>

                    {selected && (
                      <span className={styles.checkIcon(active)}>
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
};

export default EmployeeSelector;
