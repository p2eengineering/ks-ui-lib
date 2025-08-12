import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';
import Dropdown from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Dropdown allows the user to choose one value from a list either by clicking or hovering over the menu.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['type1', 'type2', 'type3', 'combo'],
      description: 'Type of dropdown',
    },
    value: {
      control: { type: 'text' },
      description: 'Selected value',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
    label: {
      control: { type: 'text' },
      description: 'Custom label text',
    },
    searchable: {
      control: { type: 'boolean' },
      description: 'Whether the dropdown is searchable',
    },
    searchPlaceholder: {
      control: { type: 'text' },
      description: 'Search input placeholder',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the dropdown is disabled',
    },
    onSelect: {
      action: 'selected',
      description: 'Function called when an option is selected',
    },
  },
  args: {
    type: 'type1',
    options: [
      { value: 'item1', label: 'List Item 1' },
      { value: 'item2', label: 'List Item 2' },
      { value: 'item3', label: 'List Item 3' },
      { value: 'item4', label: 'List Item 4' },
      { value: 'item5', label: 'List Item 5' },
      { value: 'item6', label: 'List Item 6' },
      { value: 'item7', label: 'List Item 7' },
    ],
    placeholder: '-- Select --',
    searchable: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// =============================================================================
// BASIC DROPDOWN STORIES
// =============================================================================

export const Type1Dropdown: Story = {
  args: {
    type: 'type1',
    label: 'Dropdown',
  },
};

export const Type2Dropdown: Story = {
  args: {
    type: 'type2',
    label: 'All Items',
  },
};

export const Type3Dropdown: Story = {
  args: {
    type: 'type3',
    placeholder: '-- Select --',
  },
};

export const ComboDropdown: Story = {
  args: {
    type: 'combo',
    searchable: true,
    searchPlaceholder: 'Search Country',
    placeholder: '-- Select --',
    options: [
      { value: 'afghanistan', label: 'Afghanistan' },
      { value: 'albania', label: 'Albania' },
      { value: 'algeria', label: 'Algeria' },
      { value: 'andorra', label: 'Andorra' },
      { value: 'angola', label: 'Angola' },
      { value: 'argentina', label: 'Argentina' },
      { value: 'armenia', label: 'Armenia' },
      { value: 'australia', label: 'Australia' },
      { value: 'austria', label: 'Austria' },
      { value: 'azerbaijan', label: 'Azerbaijan' },
      { value: 'bahamas', label: 'Bahamas' },
      { value: 'bahrain', label: 'Bahrain' },
      { value: 'bangladesh', label: 'Bangladesh' },
      { value: 'barbados', label: 'Barbados' },
      { value: 'belarus', label: 'Belarus' },
      { value: 'belgium', label: 'Belgium' },
      { value: 'belize', label: 'Belize' },
      { value: 'benin', label: 'Benin' },
      { value: 'bhutan', label: 'Bhutan' },
      { value: 'bolivia', label: 'Bolivia' },
      { value: 'bosnia', label: 'Bosnia and Herzegovina' },
      { value: 'botswana', label: 'Botswana' },
      { value: 'brazil', label: 'Brazil' },
      { value: 'brunei', label: 'Brunei' },
      { value: 'bulgaria', label: 'Bulgaria' },
      { value: 'burkina', label: 'Burkina Faso' },
      { value: 'burundi', label: 'Burundi' },
      { value: 'cambodia', label: 'Cambodia' },
      { value: 'cameroon', label: 'Cameroon' },
      { value: 'canada', label: 'Canada' },
      { value: 'cape-verde', label: 'Cape Verde' },
      { value: 'central-african', label: 'Central African Republic' },
      { value: 'chad', label: 'Chad' },
      { value: 'chile', label: 'Chile' },
      { value: 'china', label: 'China' },
      { value: 'colombia', label: 'Colombia' },
      { value: 'comoros', label: 'Comoros' },
      { value: 'congo', label: 'Congo' },
      { value: 'costa-rica', label: 'Costa Rica' },
      { value: 'croatia', label: 'Croatia' },
      { value: 'cuba', label: 'Cuba' },
      { value: 'cyprus', label: 'Cyprus' },
      { value: 'czech', label: 'Czech Republic' },
      { value: 'denmark', label: 'Denmark' },
      { value: 'djibouti', label: 'Djibouti' },
      { value: 'dominica', label: 'Dominica' },
      { value: 'dominican', label: 'Dominican Republic' },
      { value: 'ecuador', label: 'Ecuador' },
      { value: 'egypt', label: 'Egypt' },
      { value: 'el-salvador', label: 'El Salvador' },
      { value: 'equatorial-guinea', label: 'Equatorial Guinea' },
      { value: 'eritrea', label: 'Eritrea' },
      { value: 'estonia', label: 'Estonia' },
      { value: 'ethiopia', label: 'Ethiopia' },
      { value: 'fiji', label: 'Fiji' },
      { value: 'finland', label: 'Finland' },
      { value: 'france', label: 'France' },
      { value: 'gabon', label: 'Gabon' },
      { value: 'gambia', label: 'Gambia' },
      { value: 'georgia', label: 'Georgia' },
      { value: 'germany', label: 'Germany' },
      { value: 'ghana', label: 'Ghana' },
      { value: 'greece', label: 'Greece' },
      { value: 'grenada', label: 'Grenada' },
      { value: 'guatemala', label: 'Guatemala' },
      { value: 'guinea', label: 'Guinea' },
      { value: 'guinea-bissau', label: 'Guinea-Bissau' },
      { value: 'guyana', label: 'Guyana' },
      { value: 'haiti', label: 'Haiti' },
      { value: 'honduras', label: 'Honduras' },
      { value: 'hungary', label: 'Hungary' },
      { value: 'iceland', label: 'Iceland' },
      { value: 'india', label: 'India' },
      { value: 'indonesia', label: 'Indonesia' },
      { value: 'iran', label: 'Iran' },
      { value: 'iraq', label: 'Iraq' },
      { value: 'ireland', label: 'Ireland' },
      { value: 'israel', label: 'Israel' },
      { value: 'italy', label: 'Italy' },
      { value: 'jamaica', label: 'Jamaica' },
      { value: 'japan', label: 'Japan' },
      { value: 'jordan', label: 'Jordan' },
      { value: 'kazakhstan', label: 'Kazakhstan' },
      { value: 'kenya', label: 'Kenya' },
      { value: 'kiribati', label: 'Kiribati' },
      { value: 'kuwait', label: 'Kuwait' },
      { value: 'kyrgyzstan', label: 'Kyrgyzstan' },
      { value: 'laos', label: 'Laos' },
      { value: 'latvia', label: 'Latvia' },
      { value: 'lebanon', label: 'Lebanon' },
      { value: 'lesotho', label: 'Lesotho' },
      { value: 'liberia', label: 'Liberia' },
      { value: 'libya', label: 'Libya' },
      { value: 'liechtenstein', label: 'Liechtenstein' },
      { value: 'lithuania', label: 'Lithuania' },
      { value: 'luxembourg', label: 'Luxembourg' },
      { value: 'madagascar', label: 'Madagascar' },
      { value: 'malawi', label: 'Malawi' },
      { value: 'malaysia', label: 'Malaysia' },
      { value: 'maldives', label: 'Maldives' },
      { value: 'mali', label: 'Mali' },
      { value: 'malta', label: 'Malta' },
      { value: 'marshall', label: 'Marshall Islands' },
      { value: 'mauritania', label: 'Mauritania' },
      { value: 'mauritius', label: 'Mauritius' },
      { value: 'mexico', label: 'Mexico' },
      { value: 'micronesia', label: 'Micronesia' },
      { value: 'moldova', label: 'Moldova' },
      { value: 'monaco', label: 'Monaco' },
      { value: 'mongolia', label: 'Mongolia' },
      { value: 'montenegro', label: 'Montenegro' },
      { value: 'morocco', label: 'Morocco' },
      { value: 'mozambique', label: 'Mozambique' },
      { value: 'myanmar', label: 'Myanmar' },
      { value: 'namibia', label: 'Namibia' },
      { value: 'nauru', label: 'Nauru' },
      { value: 'nepal', label: 'Nepal' },
      { value: 'netherlands', label: 'Netherlands' },
      { value: 'new-zealand', label: 'New Zealand' },
      { value: 'nicaragua', label: 'Nicaragua' },
      { value: 'niger', label: 'Niger' },
      { value: 'nigeria', label: 'Nigeria' },
      { value: 'north-korea', label: 'North Korea' },
      { value: 'norway', label: 'Norway' },
      { value: 'oman', label: 'Oman' },
      { value: 'pakistan', label: 'Pakistan' },
      { value: 'palau', label: 'Palau' },
      { value: 'panama', label: 'Panama' },
      { value: 'papua-new-guinea', label: 'Papua New Guinea' },
      { value: 'paraguay', label: 'Paraguay' },
      { value: 'peru', label: 'Peru' },
      { value: 'philippines', label: 'Philippines' },
      { value: 'poland', label: 'Poland' },
      { value: 'portugal', label: 'Portugal' },
      { value: 'qatar', label: 'Qatar' },
      { value: 'romania', label: 'Romania' },
      { value: 'russia', label: 'Russia' },
      { value: 'rwanda', label: 'Rwanda' },
      { value: 'samoa', label: 'Samoa' },
      { value: 'san-marino', label: 'San Marino' },
      { value: 'saudi-arabia', label: 'Saudi Arabia' },
      { value: 'senegal', label: 'Senegal' },
      { value: 'serbia', label: 'Serbia' },
      { value: 'seychelles', label: 'Seychelles' },
      { value: 'sierra-leone', label: 'Sierra Leone' },
      { value: 'singapore', label: 'Singapore' },
      { value: 'slovakia', label: 'Slovakia' },
      { value: 'slovenia', label: 'Slovenia' },
      { value: 'solomon-islands', label: 'Solomon Islands' },
      { value: 'somalia', label: 'Somalia' },
      { value: 'south-africa', label: 'South Africa' },
      { value: 'south-korea', label: 'South Korea' },
      { value: 'south-sudan', label: 'South Sudan' },
      { value: 'spain', label: 'Spain' },
      { value: 'sri-lanka', label: 'Sri Lanka' },
      { value: 'sudan', label: 'Sudan' },
      { value: 'suriname', label: 'Suriname' },
      { value: 'sweden', label: 'Sweden' },
      { value: 'switzerland', label: 'Switzerland' },
      { value: 'syria', label: 'Syria' },
      { value: 'taiwan', label: 'Taiwan' },
      { value: 'tajikistan', label: 'Tajikistan' },
      { value: 'tanzania', label: 'Tanzania' },
      { value: 'thailand', label: 'Thailand' },
      { value: 'timor-leste', label: 'Timor-Leste' },
      { value: 'togo', label: 'Togo' },
      { value: 'tonga', label: 'Tonga' },
      { value: 'trinidad-tobago', label: 'Trinidad and Tobago' },
      { value: 'tunisia', label: 'Tunisia' },
      { value: 'turkey', label: 'Turkey' },
      { value: 'turkmenistan', label: 'Turkmenistan' },
      { value: 'tuvalu', label: 'Tuvalu' },
      { value: 'uganda', label: 'Uganda' },
      { value: 'ukraine', label: 'Ukraine' },
      { value: 'united-arab-emirates', label: 'United Arab Emirates' },
      { value: 'united-kingdom', label: 'United Kingdom' },
      { value: 'united-states', label: 'United States' },
      { value: 'uruguay', label: 'Uruguay' },
      { value: 'uzbekistan', label: 'Uzbekistan' },
      { value: 'vanuatu', label: 'Vanuatu' },
      { value: 'vatican', label: 'Vatican City' },
      { value: 'venezuela', label: 'Venezuela' },
      { value: 'vietnam', label: 'Vietnam' },
      { value: 'yemen', label: 'Yemen' },
      { value: 'zambia', label: 'Zambia' },
      { value: 'zimbabwe', label: 'Zimbabwe' },
    ],
  },
};



export const DisabledDropdown: Story = {
  args: {
    type: 'type1',
    disabled: true,
  },
};

// =============================================================================
// INTERACTIVE STORIES
// =============================================================================

export const InteractiveDropdown: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string>('');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        <Dropdown
          type="type1"
          options={[
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' },
            { value: 'option4', label: 'Option 4' },
          ]}
          value={selectedValue}
          onSelect={setSelectedValue}
        />
        
        <div style={{ padding: '8px 12px', backgroundColor: '#f5f5f5', borderRadius: '6px', fontSize: '14px' }}>
          Selected: <strong>{selectedValue || 'None'}</strong>
        </div>
      </div>
    );
  },
};

export const SearchableDropdown: Story = {
  render: () => {
    const [selectedCountry, setSelectedCountry] = useState<string>('');
    
    const countries = [
      { value: 'afghanistan', label: 'Afghanistan' },
      { value: 'albania', label: 'Albania' },
      { value: 'algeria', label: 'Algeria' },
      { value: 'andorra', label: 'Andorra' },
      { value: 'angola', label: 'Angola' },
      { value: 'argentina', label: 'Argentina' },
      { value: 'armenia', label: 'Armenia' },
      { value: 'australia', label: 'Australia' },
      { value: 'austria', label: 'Austria' },
      { value: 'azerbaijan', label: 'Azerbaijan' },
      { value: 'bahamas', label: 'Bahamas' },
      { value: 'bahrain', label: 'Bahrain' },
      { value: 'bangladesh', label: 'Bangladesh' },
      { value: 'barbados', label: 'Barbados' },
      { value: 'belarus', label: 'Belarus' },
      { value: 'belgium', label: 'Belgium' },
      { value: 'belize', label: 'Belize' },
      { value: 'benin', label: 'Benin' },
      { value: 'bhutan', label: 'Bhutan' },
      { value: 'bolivia', label: 'Bolivia' },
      { value: 'bosnia', label: 'Bosnia and Herzegovina' },
      { value: 'botswana', label: 'Botswana' },
      { value: 'brazil', label: 'Brazil' },
      { value: 'brunei', label: 'Brunei' },
      { value: 'bulgaria', label: 'Bulgaria' },
      { value: 'burkina', label: 'Burkina Faso' },
      { value: 'burundi', label: 'Burundi' },
      { value: 'cambodia', label: 'Cambodia' },
      { value: 'cameroon', label: 'Cameroon' },
      { value: 'canada', label: 'Canada' },
      { value: 'cape-verde', label: 'Cape Verde' },
      { value: 'central-african', label: 'Central African Republic' },
      { value: 'chad', label: 'Chad' },
      { value: 'chile', label: 'Chile' },
      { value: 'china', label: 'China' },
      { value: 'colombia', label: 'Colombia' },
      { value: 'comoros', label: 'Comoros' },
      { value: 'congo', label: 'Congo' },
      { value: 'costa-rica', label: 'Costa Rica' },
      { value: 'croatia', label: 'Croatia' },
      { value: 'cuba', label: 'Cuba' },
      { value: 'cyprus', label: 'Cyprus' },
      { value: 'czech', label: 'Czech Republic' },
      { value: 'denmark', label: 'Denmark' },
      { value: 'djibouti', label: 'Djibouti' },
      { value: 'dominica', label: 'Dominica' },
      { value: 'dominican', label: 'Dominican Republic' },
      { value: 'ecuador', label: 'Ecuador' },
      { value: 'egypt', label: 'Egypt' },
      { value: 'el-salvador', label: 'El Salvador' },
      { value: 'equatorial-guinea', label: 'Equatorial Guinea' },
      { value: 'eritrea', label: 'Eritrea' },
      { value: 'estonia', label: 'Estonia' },
      { value: 'ethiopia', label: 'Ethiopia' },
      { value: 'fiji', label: 'Fiji' },
      { value: 'finland', label: 'Finland' },
      { value: 'france', label: 'France' },
      { value: 'gabon', label: 'Gabon' },
      { value: 'gambia', label: 'Gambia' },
      { value: 'georgia', label: 'Georgia' },
      { value: 'germany', label: 'Germany' },
      { value: 'ghana', label: 'Ghana' },
      { value: 'greece', label: 'Greece' },
      { value: 'grenada', label: 'Grenada' },
      { value: 'guatemala', label: 'Guatemala' },
      { value: 'guinea', label: 'Guinea' },
      { value: 'guinea-bissau', label: 'Guinea-Bissau' },
      { value: 'guyana', label: 'Guyana' },
      { value: 'haiti', label: 'Haiti' },
      { value: 'honduras', label: 'Honduras' },
      { value: 'hungary', label: 'Hungary' },
      { value: 'iceland', label: 'Iceland' },
      { value: 'india', label: 'India' },
      { value: 'indonesia', label: 'Indonesia' },
      { value: 'iran', label: 'Iran' },
      { value: 'iraq', label: 'Iraq' },
      { value: 'ireland', label: 'Ireland' },
      { value: 'israel', label: 'Israel' },
      { value: 'italy', label: 'Italy' },
      { value: 'jamaica', label: 'Jamaica' },
      { value: 'japan', label: 'Japan' },
      { value: 'jordan', label: 'Jordan' },
      { value: 'kazakhstan', label: 'Kazakhstan' },
      { value: 'kenya', label: 'Kenya' },
      { value: 'kiribati', label: 'Kiribati' },
      { value: 'kuwait', label: 'Kuwait' },
      { value: 'kyrgyzstan', label: 'Kyrgyzstan' },
      { value: 'laos', label: 'Laos' },
      { value: 'latvia', label: 'Latvia' },
      { value: 'lebanon', label: 'Lebanon' },
      { value: 'lesotho', label: 'Lesotho' },
      { value: 'liberia', label: 'Liberia' },
      { value: 'libya', label: 'Libya' },
      { value: 'liechtenstein', label: 'Liechtenstein' },
      { value: 'lithuania', label: 'Lithuania' },
      { value: 'luxembourg', label: 'Luxembourg' },
      { value: 'madagascar', label: 'Madagascar' },
      { value: 'malawi', label: 'Malawi' },
      { value: 'malaysia', label: 'Malaysia' },
      { value: 'maldives', label: 'Maldives' },
      { value: 'mali', label: 'Mali' },
      { value: 'malta', label: 'Malta' },
      { value: 'marshall', label: 'Marshall Islands' },
      { value: 'mauritania', label: 'Mauritania' },
      { value: 'mauritius', label: 'Mauritius' },
      { value: 'mexico', label: 'Mexico' },
      { value: 'micronesia', label: 'Micronesia' },
      { value: 'moldova', label: 'Moldova' },
      { value: 'monaco', label: 'Monaco' },
      { value: 'mongolia', label: 'Mongolia' },
      { value: 'montenegro', label: 'Montenegro' },
      { value: 'morocco', label: 'Morocco' },
      { value: 'mozambique', label: 'Mozambique' },
      { value: 'myanmar', label: 'Myanmar' },
      { value: 'namibia', label: 'Namibia' },
      { value: 'nauru', label: 'Nauru' },
      { value: 'nepal', label: 'Nepal' },
      { value: 'netherlands', label: 'Netherlands' },
      { value: 'new-zealand', label: 'New Zealand' },
      { value: 'nicaragua', label: 'Nicaragua' },
      { value: 'niger', label: 'Niger' },
      { value: 'nigeria', label: 'Nigeria' },
      { value: 'north-korea', label: 'North Korea' },
      { value: 'norway', label: 'Norway' },
      { value: 'oman', label: 'Oman' },
      { value: 'pakistan', label: 'Pakistan' },
      { value: 'palau', label: 'Palau' },
      { value: 'panama', label: 'Panama' },
      { value: 'papua-new-guinea', label: 'Papua New Guinea' },
      { value: 'paraguay', label: 'Paraguay' },
      { value: 'peru', label: 'Peru' },
      { value: 'philippines', label: 'Philippines' },
      { value: 'poland', label: 'Poland' },
      { value: 'portugal', label: 'Portugal' },
      { value: 'qatar', label: 'Qatar' },
      { value: 'romania', label: 'Romania' },
      { value: 'russia', label: 'Russia' },
      { value: 'rwanda', label: 'Rwanda' },
      { value: 'samoa', label: 'Samoa' },
      { value: 'san-marino', label: 'San Marino' },
      { value: 'saudi-arabia', label: 'Saudi Arabia' },
      { value: 'senegal', label: 'Senegal' },
      { value: 'serbia', label: 'Serbia' },
      { value: 'seychelles', label: 'Seychelles' },
      { value: 'sierra-leone', label: 'Sierra Leone' },
      { value: 'singapore', label: 'Singapore' },
      { value: 'slovakia', label: 'Slovakia' },
      { value: 'slovenia', label: 'Slovenia' },
      { value: 'solomon-islands', label: 'Solomon Islands' },
      { value: 'somalia', label: 'Somalia' },
      { value: 'south-africa', label: 'South Africa' },
      { value: 'south-korea', label: 'South Korea' },
      { value: 'south-sudan', label: 'South Sudan' },
      { value: 'spain', label: 'Spain' },
      { value: 'sri-lanka', label: 'Sri Lanka' },
      { value: 'sudan', label: 'Sudan' },
      { value: 'suriname', label: 'Suriname' },
      { value: 'sweden', label: 'Sweden' },
      { value: 'switzerland', label: 'Switzerland' },
      { value: 'syria', label: 'Syria' },
      { value: 'taiwan', label: 'Taiwan' },
      { value: 'tajikistan', label: 'Tajikistan' },
      { value: 'tanzania', label: 'Tanzania' },
      { value: 'thailand', label: 'Thailand' },
      { value: 'timor-leste', label: 'Timor-Leste' },
      { value: 'togo', label: 'Togo' },
      { value: 'tonga', label: 'Tonga' },
      { value: 'trinidad-tobago', label: 'Trinidad and Tobago' },
      { value: 'tunisia', label: 'Tunisia' },
      { value: 'turkey', label: 'Turkey' },
      { value: 'turkmenistan', label: 'Turkmenistan' },
      { value: 'tuvalu', label: 'Tuvalu' },
      { value: 'uganda', label: 'Uganda' },
      { value: 'dom', label: 'Ukraine' },
      { value: 'united-arab-emirates', label: 'United Arab Emirates' },
      { value: 'united-kingdom', label: 'United Kingdom' },
      { value: 'united-states', label: 'United States' },
      { value: 'uruguay', label: 'Uruguay' },
      { value: 'uzbekistan', label: 'Uzbekistan' },
      { value: 'vanuatu', label: 'Vanuatu' },
      { value: 'vatican', label: 'Vatican City' },
      { value: 'venezuela', label: 'Venezuela' },
      { value: 'vietnam', label: 'Vietnam' },
      { value: 'yemen', label: 'Yemen' },
      { value: 'zambia', label: 'Zambia' },
      { value: 'zimbabwe', label: 'Zimbabwe' },
    ];
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        <Dropdown
          type="combo"
          options={countries}
          value={selectedCountry}
          onSelect={setSelectedCountry}
          searchable={true}
          searchPlaceholder="Search Country"
          placeholder="-- Select Country --"
        />
        
        <div style={{ padding: '8px 12px', backgroundColor: '#f5f5f5', borderRadius: '6px', fontSize: '14px' }}>
          Selected Country: <strong>{selectedCountry || 'None'}</strong>
        </div>
      </div>
    );
  },
};

// =============================================================================
// COMPREHENSIVE SHOWCASE
// =============================================================================

export const DropdownShowcase: Story = {
  render: () => {
    const [selectedValues, setSelectedValues] = useState<Record<string, string>>({});
    
    const handleSelect = (type: string, value: string) => {
      setSelectedValues(prev => ({ ...prev, [type]: value }));
    };
    
    const commonOptions = [
      { value: 'item1', label: 'List Item 1' },
      { value: 'item2', label: 'List Item 2' },
      { value: 'item3', label: 'List Item 3' },
      { value: 'item4', label: 'List Item 4' },
    ];
    
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '24px', 
        maxWidth: '800px',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <div>
          <h3 style={{ marginBottom: '16px', fontFamily: 'Source Sans 3', fontSize: '18px', fontWeight: '600' }}>
            Dropdown
          </h3>
          <p style={{ marginBottom: '20px', fontSize: '14px', color: '#666666' }}>
            Dropdown allows the user to choose one value from a list either by clicking or hovering over the menu.
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
            padding: '20px',
            backgroundColor: '#f8f9fa',
            borderRadius: '12px',
            border: '2px solid #CFD2F1'
          }}>
            {/* Type 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#404040' }}>Type 1:</span>
              <Dropdown
                type="type1"
                options={commonOptions}
                value={selectedValues.type1}
                onSelect={(value) => handleSelect('type1', value)}
                label="Dropdown"
              />
            </div>
            
            {/* Type 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#404040' }}>Type 2:</span>
              <Dropdown
                type="type2"
                options={commonOptions}
                value={selectedValues.type2}
                onSelect={(value) => handleSelect('type2', value)}
                label="All Items"
              />
            </div>
            
            {/* Type 3 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#404040' }}>Type 3:</span>
              <Dropdown
                type="type3"
                options={commonOptions}
                value={selectedValues.type3}
                onSelect={(value) => handleSelect('type3', value)}
                placeholder="-- Select --"
              />
            </div>
            
            {/* Combo */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#404040' }}>Dropdown Combo:</span>
              <Dropdown
                type="combo"
                options={[
                  { value: 'afghanistan', label: 'Afghanistan' },
                  { value: 'albania', label: 'Albania' },
                  { value: 'algeria', label: 'Algeria' },
                  { value: 'andorra', label: 'Andorra' },
                  { value: 'angola', label: 'Angola' },
                  { value: 'argentina', label: 'Argentina' },
                  { value: 'armenia', label: 'Armenia' },
                ]}
                value={selectedValues.combo}
                onSelect={(value) => handleSelect('combo', value)}
                searchable={true}
                searchPlaceholder="Search Country"
                placeholder="-- Select --"
              />
            </div>
          </div>
        </div>
        

        
        <div>
          <h3 style={{ marginBottom: '16px', fontFamily: 'Source Sans 3', fontSize: '18px', fontWeight: '600' }}>
            Selected Values
          </h3>
          <div style={{ 
            padding: '16px',
            backgroundColor: '#f8f9fa',
            borderRadius: '12px',
            fontSize: '14px'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
              <div>Type 1: <strong>{selectedValues.type1 || 'None'}</strong></div>
              <div>Type 2: <strong>{selectedValues.type2 || 'None'}</strong></div>
              <div>Type 3: <strong>{selectedValues.type3 || 'None'}</strong></div>
              <div>Combo: <strong>{selectedValues.combo || 'None'}</strong></div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      story: 'Complete showcase of all dropdown types and interactive examples.',
    },
  },
};
