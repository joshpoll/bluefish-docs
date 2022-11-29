# Python Tutor: A Bluefish Case Study

## Introduction

In this section, we will explore how to use Bluefish to build complex domain specific diagrams like Python Tutor visualizations.

First, let's breakdown the parts of a Python Tutor visualization. Below is an example of a Python Tutor diagram that we will recreate in this section:

![Example Python Tutor Diagram](images/python-tutor.png)

We can divide the components of this diagram into two groups: the components associated with the Global Frame and the Objects. Let's build these two parts of the diagram separately, and then compose the two parts to create the entire Python Tutor visualization.

## The Global Frame

The Global Frame itself is a composition of various other components. In particular, the Global Frame contains some text components, some variables, and some components responsible for the styling if the output.

### The Variable Sub-Component

First, let's construct a component for the variable label and value pairs at the right edge of the global frame. We will call this component `Variable`. The `Variable` component requires four pieces of information: the pointer of the object it references (which could be null), the variable name, the variable value, and the variable ID.

```tsx live noInline
const Variable = forwardRef(function _Variable({ data }, ref) {
  const { pointObject, name, value, opId } = data;

  // References
  const textRef = useRef(null);
  const valueRef = useRef(null);
  const boxRef = useRef(null);
  const boxRefBorderLeft = useRef(null);
  const boxRefBorderBottom = useRef(null);
  const variableRef = useRef(null);

  // Declares font used in Python Tutor Diagrams
  const fontFamily = 'verdana, arial, helvetica, sans-serif';

  return (
    <Group ref={ref} name={opId}>
    
        // Creates frame of Variable component (text label & box for value)
        <Space name={variableRef} horizontally by={5}>
            <Text ref={textRef} contents={name} fontSize={'24px'} fontFamily={fontFamily} fill={'black'} />
            <Rect ref={boxRef} height={40} width={40} fill={'#e2ebf6'} />
        </Space>

        // Creates left and bottom edge borders
        <Rect ref={boxRefBorderLeft} height={40} width={2} fill={'#a6b3b6'} />
        <Rect ref={boxRefBorderBottom} height={2} width={40} fill={'#a6b3b6'} />

        // Creates text labels of variable
        <Text
            ref={valueRef}
            contents={value}
            fontFamily={fontFamily}
            fontSize={'24px'}
            fill={'black'}
        />

        // Align text and border components to variable frame
        <Align bottomCenter>
            <Ref to={boxRefBorderBottom} />
            <Ref to={boxRef} />
        </Align>
        <Align centerLeft>
            <Ref to={boxRefBorderLeft} />
            <Ref to={boxRef} />
        </Align>
        <Align topCenter>
            <Ref to={valueRef} />
            <Ref to={boxRef} />
        </Align>
    </Group>
  )
})

render(
    <SVG width={300} height={50}>
        <Variable data={{ pointObject: null, name: 'x', value: '5', opId: 'v3' }} />
    </SVG>
)
```

### Constructing the Global Frame

Now, we are ready to put together the global frame component. The Bluefish component takes a list of Variables as input and generates the global frame with the appropriate text, styling, and variable label and value components.

```tsx live noInline
const GlobalFrame = forwardRef(function _GlobalFrame({ variables, opId }, ref) {

  // References
  const frame = useRef(null);
  const opIdLabel = useRef(null);
  const frameVariables = useRef(null);
  const frameBorder = useRef(null);

  // Font declaration
  const fontFamily = 'Andale mono, monospace';

  return (
    <Group ref={ref} name={opId}>

      // Global Frame and relevant text
      <Rect ref={frame} height={300} width={200} fill={'#e2ebf6'} />
      <Rect ref={frameBorder} height={300} width={5} fill={'#a6b3b6'} />
      <Text ref={opIdLabel} contents={'Global Frame'} fontSize={'24px'} fontFamily={fontFamily} fill={'black'} />

      // Variable components
      <Space name={`frameVariables`} ref={frameVariables} vertically by={10}>
        {variables.map((variable) => (
          <Variable data={variable} />
        ))}
      </Space>

      // Alignment
      <Align centerLeft>
        <Ref to={frameBorder} />
        <Ref to={frame} />
      </Align>
      <Align topCenter>
        <Ref to={opIdLabel} />
        <Ref to={frame} />
      </Align>
      <Align centerRight to={'centerRight'}>
        <Ref to={frameVariables} />
        <Ref to={frame} />
      </Align>
    </Group>
  )
})

render(
    // Try adding more data or changing the data here!
    <SVG width={500} height={300}>
        <GlobalFrame
            variables={[
            { pointObject: { opId: 'list1' }, name: 'c', opId: 'c' },
            { pointObject: { opId: 'list2' }, name: 'd', opId: 'd' },
            { pointObject: { opId: 'list3' }, name: 'x', value: '5', opId: 'x' },
            ]}
            opId={'globalFrame'}
      />
    </SVG>
)

```
And with that, our global frame is complete! Let's now create the other part of our Python Tutor diagram: the objects that our global frame variables reference.

## The Objects

In the Python Tutor diagram, the objects that the global frame variables reference are represented as rectangles with a value and pointer to the next object in the sequence. 

## Putting The Diagram Together

Now that we've created the two halves of our Python Tutor diagram, let's compose them together and add links between the global frame variables and the objects to complete our visualization!