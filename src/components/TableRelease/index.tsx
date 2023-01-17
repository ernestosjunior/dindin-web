import { Table, Row, Col, Tooltip, Text, styled } from '@nextui-org/react'
import { EditIcon } from './editIcon'
import { DeleteIcon } from './deleteIcon'
import dayjs from 'dayjs'

export const IconButton = styled('button', {
  dflex: 'center',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  padding: '0',
  margin: '0',
  bg: 'transparent',
  transition: '$default',
  '&:hover': {
    opacity: '0.8',
  },
  '&:active': {
    opacity: '0.6',
  },
})

const weekDays = {
  0: 'Domingo',
  1: 'Segunda',
  2: 'Terça',
  3: 'Quarta',
  4: 'Quinta',
  5: 'Sexta',
  6: 'Sábado',
  null: '-',
}

const columns = [
  { name: 'Data', uid: 'date' },
  { name: 'Dia da semana', uid: 'week_day' },
  { name: 'Descrição', uid: 'description' },
  { name: 'Categoria', uid: 'category' },
  { name: 'Valor', uid: 'value' },
  { name: '', uid: 'actions' },
]

export const TableRelease = ({ releases = [] }: any) => {
  const baseCss = {
    fontWeight: 400,
    fontFamily: 'Lato, sans-serif',
    fontSize: '14px',
    lineHeight: '17px',
  }
  const renderCell = (releases: any, columnKey: any) => {
    switch (columnKey) {
      case 'date':
        const formatedDate = dayjs(releases.date).format('DD/MM/YYYY')
        return (
          <Col>
            <Row>
              <Text
                b
                size={14}
                css={{ tt: 'capitalize', ...baseCss, fontWeight: 700 }}
              >
                {formatedDate}
              </Text>
            </Row>
          </Col>
        )

      case 'week_day':
        const index = dayjs(releases.date).format('d') as keyof typeof weekDays
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: 'capitalize', ...baseCss }}>
                {weekDays[index]}
              </Text>
            </Row>
          </Col>
        )

      case 'description':
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: 'capitalize', ...baseCss }}>
                {releases.description}
              </Text>
            </Row>
          </Col>
        )

      case 'category':
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: 'capitalize', ...baseCss }}>
                {releases.category.title}
              </Text>
            </Row>
          </Col>
        )

      case 'value':
        return (
          <Col>
            <Row>
              <Text
                size={14}
                css={{
                  tt: 'capitalize',
                  ...baseCss,
                  color: releases.type === 'entrance' ? '#7B61FF' : '#FA8C10',
                  fontWeight: 700,
                }}
              >
                {releases.value?.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </Text>
            </Row>
          </Col>
        )

      case 'actions':
        return (
          <Row justify="center" align="center">
            <Col css={{ d: 'flex' }}>
              <Tooltip content="Editar">
                <IconButton onClick={() => alert('Editar: ' + releases.id)}>
                  <EditIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: 'flex' }}>
              <Tooltip
                content="Remover"
                color="error"
                onClick={() => alert('Remover: ' + releases.id)}
              >
                <IconButton>
                  <DeleteIcon size={20} fill="#7454B3" />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        )
      default:
        return
    }
  }
  return (
    <Table
      aria-label="Example table with custom cells"
      css={{
        height: 'auto',
        minWidth: '100%',
      }}
      selectionMode="none"
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column
            key={column.uid}
            hideHeader={column.uid === 'actions'}
            align={column.uid === 'actions' ? 'center' : 'start'}
            css={{
              color: '#000000',
              ...baseCss,
              fontWeight: 700,
              backgroundColor: '#FAFAFA',
            }}
          >
            {column.name}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={releases}>
        {(item) => (
          <Table.Row>
            {(columnKey) => (
              <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  )
}
