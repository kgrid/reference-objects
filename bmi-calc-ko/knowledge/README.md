# Body Mass Index Calculator: Knowledge
This is the shared knowledge underlying the serices within this knowledge object.

## Usage
- calculate_bmi: takes in a patient's height(m/in), weight(kg/lb), and wether the messurement is occuring in Metric or Imperial units
- get_bmi_category: takes in a bmi and returns what health category this BMI would be classified under. The current output options are: "Underweight", "Normal Weight", "OverWeight", and "Obese"

### Testing
Testing scripts can be run by using ```deno test test_knowledge.ts``` to verify the knowledge underlying deno services
