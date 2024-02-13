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
import { getRecording } from "../graphql/queries";
import { updateRecording } from "../graphql/mutations";
const client = generateClient();
export default function RecordingUpdateForm(props) {
  const {
    id: idProp,
    recording: recordingModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    date: "",
    agentname: "",
    agentid: "",
    transcript: "",
    video: "",
  };
  const [date, setDate] = React.useState(initialValues.date);
  const [agentname, setAgentname] = React.useState(initialValues.agentname);
  const [agentid, setAgentid] = React.useState(initialValues.agentid);
  const [transcript, setTranscript] = React.useState(initialValues.transcript);
  const [video, setVideo] = React.useState(initialValues.video);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = recordingRecord
      ? { ...initialValues, ...recordingRecord }
      : initialValues;
    setDate(cleanValues.date);
    setAgentname(cleanValues.agentname);
    setAgentid(cleanValues.agentid);
    setTranscript(cleanValues.transcript);
    setVideo(cleanValues.video);
    setErrors({});
  };
  const [recordingRecord, setRecordingRecord] =
    React.useState(recordingModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getRecording.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getRecording
        : recordingModelProp;
      setRecordingRecord(record);
    };
    queryData();
  }, [idProp, recordingModelProp]);
  React.useEffect(resetStateValues, [recordingRecord]);
  const validations = {
    date: [],
    agentname: [],
    agentid: [{ type: "Required" }],
    transcript: [],
    video: [],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          date: date ?? null,
          agentname: agentname ?? null,
          agentid,
          transcript: transcript ?? null,
          video: video ?? null,
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
            query: updateRecording.replaceAll("__typename", ""),
            variables: {
              input: {
                id: recordingRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "RecordingUpdateForm")}
      {...rest}
    >
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={date && convertToLocal(new Date(date))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              date: value,
              agentname,
              agentid,
              transcript,
              video,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <TextField
        label="Agentname"
        isRequired={false}
        isReadOnly={false}
        value={agentname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              agentname: value,
              agentid,
              transcript,
              video,
            };
            const result = onChange(modelFields);
            value = result?.agentname ?? value;
          }
          if (errors.agentname?.hasError) {
            runValidationTasks("agentname", value);
          }
          setAgentname(value);
        }}
        onBlur={() => runValidationTasks("agentname", agentname)}
        errorMessage={errors.agentname?.errorMessage}
        hasError={errors.agentname?.hasError}
        {...getOverrideProps(overrides, "agentname")}
      ></TextField>
      <TextField
        label="Agentid"
        isRequired={true}
        isReadOnly={false}
        value={agentid}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              agentname,
              agentid: value,
              transcript,
              video,
            };
            const result = onChange(modelFields);
            value = result?.agentid ?? value;
          }
          if (errors.agentid?.hasError) {
            runValidationTasks("agentid", value);
          }
          setAgentid(value);
        }}
        onBlur={() => runValidationTasks("agentid", agentid)}
        errorMessage={errors.agentid?.errorMessage}
        hasError={errors.agentid?.hasError}
        {...getOverrideProps(overrides, "agentid")}
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
              date,
              agentname,
              agentid,
              transcript: value,
              video,
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
              date,
              agentname,
              agentid,
              transcript,
              video: value,
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || recordingModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || recordingModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
