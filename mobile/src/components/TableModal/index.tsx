import { useState } from 'react';
import { Modal, Platform, TouchableOpacity } from 'react-native';
import { Button } from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import { ModalBody, Overlay, Header, Form, Input } from './styles';

interface TableModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
}

export function TableModal({ visible, onClose, onSave }: TableModalProps) {
  const [table, setTable] = useState('');

  function handleSave() {
    onSave(table);
    onClose();
  }

  return (
    <Modal transparent visible={visible} animationType='fade'>
      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <ModalBody>
          <Header>
            <Text weight='600'>Informe a mesa</Text>
            <TouchableOpacity onPress={onClose}>
              <Close color='#666' />
            </TouchableOpacity>
          </Header>
          <Form>
            <Input
              keyboardType='number-pad'
              placeholder='Número da mesa'
              placeholderTextColor='#666'
              onChangeText={value => setTable(value)}
            />

            <Button onPress={handleSave} disabled={table.length === 0}>
              Salvar
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}