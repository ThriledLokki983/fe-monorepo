export const checkboxUsageCode = `import { Checkbox } from '@mono/components';

// Basic checkbox
<Checkbox>
  Subscribe to newsletter
</Checkbox>

// Controlled checkbox
const [isSelected, setSelected] = useState(false);

<Checkbox
  isSelected={isSelected}
  onChange={setSelected}
>
  Accept terms and conditions
</Checkbox>

// Required checkbox
<Checkbox isRequired>
  I agree to the privacy policy
</Checkbox>

// Checkbox with different sizes
<Checkbox size="small">Small</Checkbox>
<Checkbox size="medium">Medium</Checkbox>
<Checkbox size="large">Large</Checkbox>

// Checkbox with variants
<Checkbox variant="success" isSelected>Success</Checkbox>
<Checkbox variant="warning" isSelected>Warning</Checkbox>
<Checkbox variant="error" isSelected>Error</Checkbox>

// Indeterminate checkbox
<Checkbox isIndeterminate>
  Select all items
</Checkbox>

// Disabled states
<Checkbox isDisabled>Disabled</Checkbox>
<Checkbox isDisabled isSelected>Disabled Selected</Checkbox>

// Invalid state
<Checkbox isInvalid>
  Invalid checkbox
</Checkbox>

// Read-only state
<Checkbox isReadOnly isSelected>
  Read-only checkbox
</Checkbox>

// Form integration
<form>
  <Checkbox name="terms" value="accepted">
    Accept terms
  </Checkbox>
  <Checkbox name="newsletter" value="subscribe">
    Subscribe to newsletter
  </Checkbox>
</form>

// Select all pattern
const [checkedItems, setCheckedItems] = useState<string[]>([]);
const features = ['notifications', 'updates', 'promotions'];
const isAllSelected = checkedItems.length === features.length;
const isSomeSelected = checkedItems.length > 0 && checkedItems.length < features.length;

<Checkbox
  isSelected={isAllSelected}
  isIndeterminate={isSomeSelected}
  onChange={(selected) => {
    if (selected) {
      setCheckedItems([...features]);
    } else {
      setCheckedItems([]);
    }
  }}
>
  Select all features
</Checkbox>

{features.map((feature) => (
  <Checkbox
    key={feature}
    isSelected={checkedItems.includes(feature)}
    onChange={(selected) => {
      if (selected) {
        setCheckedItems(prev => [...prev, feature]);
      } else {
        setCheckedItems(prev => prev.filter(item => item !== feature));
      }
    }}
  >
    {feature}
  </Checkbox>
))}`;
