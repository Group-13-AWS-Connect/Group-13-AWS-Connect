/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createRecording } from "../graphql/mutations";
const client = generateClient();
export default function RecordingCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    agent_id: "",
    name: "",
    transcript: "",
    video: "",
    tags: "",
  };
  const [agent_id, setAgent_id] = React.useState(initialValues.agent_id);
  const [name, setName] = React.useState(initialValues.name);
  const [transcript, setTranscript] = React.useState(initialValues.transcript);
  const [video, setVideo] = React.useState(initialValues.video);
  const [tags, setTags] = React.useState(initialValues.tags);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setAgent_id(initialValues.agent_id);
    setName(initialValues.name);
    setTranscript(initialValues.transcript);
    setVideo(initialValues.video);
    setTags(initialValues.tags);
    setErrors({});
  };
  const validations = {
    agent_id: [],
    name: [],
    transcript: [],
    video: [],
    tags: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          agent_id,
          name,
          transcript,
          video,
          tags,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createRecording.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "RecordingCreateForm")}
      {...rest}
    >
      <TextField
        label="Agent id"
        isRequired={false}
        isReadOnly={false}
        value={agent_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              agent_id: value,
              name,
              transcript,
              video,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.agent_id ?? value;
          }
          if (errors.agent_id?.hasError) {
            runValidationTasks("agent_id", value);
          }
          setAgent_id(value);
        }}
        onBlur={() => runValidationTasks("agent_id", agent_id)}
        errorMessage={errors.agent_id?.errorMessage}
        hasError={errors.agent_id?.hasError}
        {...getOverrideProps(overrides, "agent_id")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              agent_id,
              name: value,
              transcript,
              video,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Transcript"
        isRequired={false}
        isReadOnly={false}
        value={transcript}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              agent_id,
              name,
              transcript: value,
              video,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.transcript ?? value;
          }
          if (errors.transcript?.hasError) {
            runValidationTasks("transcript", value);
          }
          setTranscript(value);
        }}
        onBlur={() => runValidationTasks("transcript", transcript)}
        errorMessage={errors.transcript?.errorMessage}
        hasError={errors.transcript?.hasError}
        {...getOverrideProps(overrides, "transcript")}
      ></TextField>
      <TextField
        label="Video"
        isRequired={false}
        isReadOnly={false}
        value={video}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              agent_id,
              name,
              transcript,
              video: value,
              tags,
            };
            const result = onChange(modelFields);
            value = result?.video ?? value;
          }
          if (errors.video?.hasError) {
            runValidationTasks("video", value);
          }
          setVideo(value);
        }}
        onBlur={() => runValidationTasks("video", video)}
        errorMessage={errors.video?.errorMessage}
        hasError={errors.video?.hasError}
        {...getOverrideProps(overrides, "video")}
      ></TextField>
      <TextField
        label="Tags"
        isRequired={false}
        isReadOnly={false}
        value={tags}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              agent_id,
              name,
              transcript,
              video,
              tags: value,
            };
            const result = onChange(modelFields);
            value = result?.tags ?? value;
          }
          if (errors.tags?.hasError) {
            runValidationTasks("tags", value);
          }
          setTags(value);
        }}
        onBlur={() => runValidationTasks("tags", tags)}
        errorMessage={errors.tags?.errorMessage}
        hasError={errors.tags?.hasError}
        {...getOverrideProps(overrides, "tags")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
